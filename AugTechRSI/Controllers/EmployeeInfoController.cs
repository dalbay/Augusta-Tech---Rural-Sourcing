using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AugTechRSI.Models;
using AugTech_RSI.Models;
using System.Data.SqlClient;

namespace AugTechRSI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeInfoController : ControllerBase
    {
        //variables to store stored procedure data
        private static string connection;
        List<EmployeeInfo> employeeInfos = new List<EmployeeInfo>();
        List<SkillCategory> skillCategories = new List<SkillCategory>();


        private readonly RuralSourcing_HRdbContext _context;

        public EmployeeInfoController(RuralSourcing_HRdbContext context)
        {
            _context = context;

            //get the connection string
            connection = context.Database.GetDbConnection().ConnectionString;
        }
        // GET: api/EmployeeInfo
        [HttpGet]
        public IEnumerable<EmployeeInfo> GetEmployeeInfos()
        {
            try
            {
                var supervisors = _context.Supervisor.ToList();
                var departments = _context.Department.ToList();
                var locations = _context.Location.ToList();
                var sows = _context.Sow.ToList();
                var skills = getSkillCategory();
                EmployeeInfo employeeInfo = new EmployeeInfo();
                employeeInfo.Supervisors = supervisors;
                employeeInfo.Departments = departments;
                employeeInfo.Locations = locations;
                employeeInfo.Sows = sows;
                employeeInfo.Skills = skills;
                employeeInfos.Add(employeeInfo);
            }
            catch (Exception)
            {
                throw;
            }
            return employeeInfos;
        }

        //Retrieve data with stored procedure
        public List<SkillCategory> getSkillCategory()
        {
            using (SqlConnection sqlConnection = new SqlConnection(connection))
            {
                using (SqlCommand sqlCommand = new SqlCommand("SP_GetAllSkills", sqlConnection))
                {
                    sqlConnection.Open();
                    sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlDataReader rd = sqlCommand.ExecuteReader();
                    while (rd.Read())
                    {
                        SkillCategory skill = new SkillCategory();
                        skill.SkillId = (int)rd["SkillID"];
                        skill.SkillName = rd["SkillTitle"].ToString();
                        skill.CategoryName = rd["TypeName"].ToString();
                        skillCategories.Add(skill);
                    }
                }
                return skillCategories;
            }
        }

        // GET: api/EmployeeInfo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Employee>> GetEmployee(int id)
        {
            var employee = await _context.Employee.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        // PUT: api/EmployeeInfo/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployee(int id, Employee employee)
        {
            if (id != employee.UserId)
            {
                return BadRequest();
            }

            _context.Entry(employee).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EmployeeInfo
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            _context.Employee.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = employee.UserId }, employee);
        }

        // DELETE: api/EmployeeInfo/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Employee>> DeleteEmployee(int id)
        {
            var employee = await _context.Employee.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }

            _context.Employee.Remove(employee);
            await _context.SaveChangesAsync();

            return employee;
        }

        private bool EmployeeExists(int id)
        {
            return _context.Employee.Any(e => e.UserId == id);
        }
    }
}

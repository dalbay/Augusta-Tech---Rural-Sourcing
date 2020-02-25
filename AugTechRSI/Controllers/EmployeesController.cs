using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AugTechRSI.Models;
using System.Data.SqlClient;

namespace AugTechRSI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly RuralSourcing_HRdbContext _context;

        //variables to store stored procedure data
        private static string connection;
        List<SPGetAllEmployees> spGetAllEmployees = new List<SPGetAllEmployees>();


        public EmployeesController(RuralSourcing_HRdbContext context)
        {
            _context = context;

            //get the connections
            connection = context.Database.GetDbConnection().ConnectionString;
        }

        //Retrieve data with stored procedure
        public List<SPGetAllEmployees> getAllEmployees()
        {
            using(SqlConnection sqlConnection = new SqlConnection(connection))
            {
                using (SqlCommand sqlCommand = new SqlCommand("SP_GetAllEmployees", sqlConnection))
                {
                    sqlConnection.Open();
                    sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlDataReader rd = sqlCommand.ExecuteReader();
                    while(rd.Read())
                    {
                        SPGetAllEmployees employee = new SPGetAllEmployees();
                        employee.UserID = (int)rd["UserID"];
                        employee.EmployeeName = rd["EmployeeName"].ToString();
                        employee.Position = rd["Position"].ToString();
                        employee.ManagerName = rd["ManagerName"].ToString();
                        employee.DepartmentName = rd["DepartmentName"].ToString();
                        employee.LocationName = rd["LocationName"].ToString();
                        employee.SOW = rd["SOW"].ToString();

                        spGetAllEmployees.Add(employee);
                    }
                }
                return spGetAllEmployees;
            }
        }

        // GET: api/Employees
        [HttpGet]
        public IEnumerable<SPGetAllEmployees> GetAllEmployees()
        {
            return getAllEmployees();
        }
        //public async Task<ActionResult<IEnumerable<Employee>>> GetEmployee()
        //{
        //    return await _context.Employee.ToListAsync();
        //}

        // GET: api/Employees/5
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

        // PUT: api/Employees/5
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

        // POST: api/Employees
        [HttpPost]
        public async Task<ActionResult<Employee>> PostEmployee(Employee employee)
        {
            _context.Employee.Add(employee);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployee", new { id = employee.UserId }, employee);
        }

        // DELETE: api/Employees/5
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

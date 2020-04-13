using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AugTechRSI.Models;

namespace AugTechRSI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeSkillsController : ControllerBase
    {
        private readonly RuralSourcing_HRdbContext _context;

        public EmployeeSkillsController(RuralSourcing_HRdbContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeSkills
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EmployeeSkill>>> GetEmployeeSkill()
        {
            return await _context.EmployeeSkill.ToListAsync();
        }

        // GET: api/EmployeeSkills/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeSkill>> GetEmployeeSkill(int id)
        {
            var employeeSkill = await _context.EmployeeSkill.FindAsync(id);

            if (employeeSkill == null)
            {
                return NotFound();
            }

            return employeeSkill;
        }

        // PUT: api/EmployeeSkills/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeSkill(int id, EmployeeSkill employeeSkill)
        {
            if (id != employeeSkill.EmpSkillId)
            {
                return BadRequest();
            }

            _context.Entry(employeeSkill).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeSkillExists(id))
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

        // POST: api/EmployeeSkills
        [HttpPost]
        public async Task<ActionResult<EmployeeSkill>> PostEmployeeSkill(EmployeeSkill employeeSkill)
        {
            _context.EmployeeSkill.Add(employeeSkill);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeSkill", new { id = employeeSkill.EmpSkillId }, employeeSkill);
        }

        // DELETE: api/EmployeeSkills/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmployeeSkill>> DeleteEmployeeSkill(int id)
        {
            var employeeSkill = await _context.EmployeeSkill.FindAsync(id);
            if (employeeSkill == null)
            {
                return NotFound();
            }

            _context.EmployeeSkill.Remove(employeeSkill);
            await _context.SaveChangesAsync();

            return employeeSkill;
        }

        private bool EmployeeSkillExists(int id)
        {
            return _context.EmployeeSkill.Any(e => e.EmpSkillId == id);
        }
    }
}

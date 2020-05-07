using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AugTechRSI.Models;
using Microsoft.AspNetCore.Authorization;  //------!

namespace AugTechRSI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles="Administrator")]   //------!
    public class CategoryController : ControllerBase
    {
        private readonly RuralSourcing_HRdbContext _context;

        public CategoryController(RuralSourcing_HRdbContext context)
        {
            _context = context;
        }

        // GET: api/Category
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SkillType>>> GetSkillType()
        {
            return await _context.SkillType.ToListAsync();
        }

        // GET: api/Category/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SkillType>> GetSkillType(int id)
        {
            var skillType = await _context.SkillType.FindAsync(id);

            if (skillType == null)
            {
                return NotFound();
            }

            return skillType;
        }

        // PUT: api/Category/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSkillType(int id, SkillType skillType)
        {
            if (id != skillType.TypeId)
            {
                return BadRequest();
            }

            _context.Entry(skillType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SkillTypeExists(id))
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

        // POST: api/Category
        [HttpPost]
        public async Task<ActionResult<SkillType>> PostSkillType(SkillType skillType)
        {
            _context.SkillType.Add(skillType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSkillType", new { id = skillType.TypeId }, skillType);
        }

        // DELETE: api/Category/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SkillType>> DeleteSkillType(int id)
        {
            var skillType = await _context.SkillType.FindAsync(id);
            if (skillType == null)
            {
                return NotFound();
            }

            _context.SkillType.Remove(skillType);
            await _context.SaveChangesAsync();

            return skillType;
        }

        private bool SkillTypeExists(int id)
        {
            return _context.SkillType.Any(e => e.TypeId == id);
        }
    }
}

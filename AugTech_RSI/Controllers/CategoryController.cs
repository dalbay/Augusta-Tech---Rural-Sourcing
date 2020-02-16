using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AugTech_RSI.Models;

namespace AugTech_RSI.Controllers
{
    [Produces("application/json")]
    [Route("api/Category")]
    public class CategoryController : Controller
    {
        private readonly RuralSourcing_HRdbContext _context;

        public CategoryController(RuralSourcing_HRdbContext context)
        {
            _context = context;
        }

        // GET: api/Category
        [HttpGet]
        public IEnumerable<SkillType> GetSkillType()
        {
            return _context.SkillType;
        }

        // GET: api/Category/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSkillType([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var skillType = await _context.SkillType.SingleOrDefaultAsync(m => m.TypeId == id);

            if (skillType == null)
            {
                return NotFound();
            }

            return Ok(skillType);
        }

        // PUT: api/Category/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSkillType([FromRoute] int id, [FromBody] SkillType skillType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

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
        public async Task<IActionResult> PostSkillType([FromBody] SkillType skillType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.SkillType.Add(skillType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSkillType", new { id = skillType.TypeId }, skillType);
        }

        // DELETE: api/Category/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSkillType([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var skillType = await _context.SkillType.SingleOrDefaultAsync(m => m.TypeId == id);
            if (skillType == null)
            {
                return NotFound();
            }

            _context.SkillType.Remove(skillType);
            await _context.SaveChangesAsync();

            return Ok(skillType);
        }

        private bool SkillTypeExists(int id)
        {
            return _context.SkillType.Any(e => e.TypeId == id);
        }
    }
}
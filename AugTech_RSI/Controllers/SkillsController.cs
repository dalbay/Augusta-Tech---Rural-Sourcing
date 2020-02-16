using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AugTech_RSI.Models;
using System.Data.SqlClient;

namespace AugTech_RSI.Controllers
{
    [Produces("application/json")]
    [Route("api/Skills")]

    public class SkillsController : Controller
    {
        private readonly RuralSourcing_HRdbContext _context;

        private static string connection;
        List<SpGetAllSkills> spGetAllSkills = new List<SpGetAllSkills>();
        public SkillsController(RuralSourcing_HRdbContext context)
        {
            _context = context;
            connection = context.Database.GetDbConnection().ConnectionString;
        }

        public List<SpGetAllSkills> getAllSkills()
        {
            using (SqlConnection sqlConnection = new SqlConnection(connection))
            {
                using(SqlCommand sqlCommand = new SqlCommand("SP_GetAllSkills", sqlConnection))
                {
                    sqlConnection.Open();
                    sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                    SqlDataReader rd = sqlCommand.ExecuteReader();
                    while (rd.Read())
                    {
                        SpGetAllSkills skill = new SpGetAllSkills();
                        skill.SkillId = (int)rd["SkillID"];
                        skill.SkillTitle = rd["SkillTitle"].ToString();
                        skill.SkillDescription = rd["SkillDescription"].ToString();
                        skill.TypeName = rd["TypeName"].ToString();
                        skill.totalAvailableEmployees = rd["totalAvailableEmployees"].GetType()== typeof(DBNull)?0:(int)rd["totalAvailableEmployees"];
                        skill.totalSkilledEmployees = (int)rd["totalSkilledEmployees"];
                        spGetAllSkills.Add(skill);
                    }
                }
                return spGetAllSkills;
            }
        }
        // GET: api/Skills
        [HttpGet]
        public IEnumerable<SpGetAllSkills> GetSkill()
        {
            return getAllSkills();
        }

        // GET: api/Skills/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSkill([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var skill = await _context.Skill.SingleOrDefaultAsync(m => m.SkillId == id);

            if (skill == null)
            {
                return NotFound();
            }

            return Ok(skill);
        }

        // PUT: api/Skills/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSkill([FromRoute] int id, [FromBody] Skill skill)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != skill.SkillId)
            {
                return BadRequest();
            }

            _context.Entry(skill).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SkillExists(id))
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

        // POST: api/Skills
        [HttpPost]
        public async Task<IActionResult> PostSkill([FromBody] Skill skill)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Skill.Add(skill);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSkill", new { id = skill.SkillId }, skill);
        }

        // DELETE: api/Skills/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSkill([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var skill = await _context.Skill.SingleOrDefaultAsync(m => m.SkillId == id);
            if (skill == null)
            {
                return NotFound();
            }

            _context.Skill.Remove(skill);
            await _context.SaveChangesAsync();

            return Ok(skill);
        }

        private bool SkillExists(int id)
        {
            return _context.Skill.Any(e => e.SkillId == id);
        }
    }
}
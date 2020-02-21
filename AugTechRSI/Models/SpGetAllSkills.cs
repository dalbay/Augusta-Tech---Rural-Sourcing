using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugTech_RSI.Models
{
    public class SpGetAllSkills
    {
        public int SkillId { get; set; }
        public string SkillTitle { get; set; }
        public string SkillDescription { get; set; }
        public string   TypeName { get; set; }
        public int totalSkilledEmployees { get; set; }
        public int totalAvailableEmployees { get; set; }
    }
}

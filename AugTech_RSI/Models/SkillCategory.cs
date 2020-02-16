using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugTech_RSI.Models
{
    public class SkillCategory
    {
        public int SkillId { get; set; }
        public string SkillTitle { get; set; }
        public string SkillDescription { get; set; }
        public int TypeId { get; set; }

        public SkillType Type { get; set; }

    }
}

using System;
using System.Collections.Generic;

namespace AugTech_RSI.Models
{
    public partial class Skill
    {
        public Skill()
        {
            EmployeeSkill = new HashSet<EmployeeSkill>();
        }

        public int SkillId { get; set; }
        public string SkillTitle { get; set; }
        public string SkillDescription { get; set; }
        public int TypeId { get; set; }

        public SkillType Type { get; set; }
        public ICollection<EmployeeSkill> EmployeeSkill { get; set; }


    }
}

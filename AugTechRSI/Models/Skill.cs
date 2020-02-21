using System;
using System.Collections.Generic;

namespace AugTechRSI.Models
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

        public virtual SkillType Type { get; set; }
        public virtual ICollection<EmployeeSkill> EmployeeSkill { get; set; }
    }
}

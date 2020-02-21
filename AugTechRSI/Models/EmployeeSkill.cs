using System;
using System.Collections.Generic;

namespace AugTechRSI.Models
{
    public partial class EmployeeSkill
    {
        public int EmpSkillId { get; set; }
        public int UserId { get; set; }
        public int SkillId { get; set; }
        public int LevelId { get; set; }

        public virtual Level Level { get; set; }
        public virtual Skill Skill { get; set; }
        public virtual Employee User { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace AugTech_RSI.Models
{
    public partial class EmployeeSkill
    {
        public int EmpSkillId { get; set; }
        public int UserId { get; set; }
        public int SkillId { get; set; }
        public int LevelId { get; set; }

        public Level Level { get; set; }
        public Skill Skill { get; set; }
        public Employee User { get; set; }
    }
}

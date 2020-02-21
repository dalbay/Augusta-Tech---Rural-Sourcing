using System;
using System.Collections.Generic;

namespace AugTechRSI.Models
{
    public partial class Level
    {
        public Level()
        {
            EmployeeSkill = new HashSet<EmployeeSkill>();
        }

        public int LevelId { get; set; }
        public string LevelValue { get; set; }
        public string LevelDescription { get; set; }

        public virtual ICollection<EmployeeSkill> EmployeeSkill { get; set; }
    }
}

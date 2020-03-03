using AugTech_RSI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugTechRSI.Models
{
    public class EmployeeInfo
    {
        public virtual ICollection<Supervisor> Supervisors { get; set; }
        public virtual ICollection<Department> Departments { get; set; }
        public virtual ICollection<Location> Locations { get; set; }
        public virtual ICollection<Sow> Sows { get; set; }
        public virtual ICollection<SkillCategory>Skills { get; set; }
    }
}

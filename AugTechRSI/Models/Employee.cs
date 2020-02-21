using System;
using System.Collections.Generic;

namespace AugTechRSI.Models
{
    public partial class Employee
    {
        public Employee()
        {
            EmployeeSkill = new HashSet<EmployeeSkill>();
        }

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Position { get; set; }
        public int DepartmentId { get; set; }
        public int LocationId { get; set; }
        public int? SowId { get; set; }
        public string SupFirstName { get; set; }
        public string SupLastName { get; set; }

        public virtual Department Department { get; set; }
        public virtual Location Location { get; set; }
        public virtual Sow Sow { get; set; }
        public virtual Supervisor Sup { get; set; }
        public virtual ICollection<EmployeeSkill> EmployeeSkill { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace AugTech_RSI.Models
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
        public int? ManagerUserId { get; set; }
        public string Position { get; set; }
        public int DepartmentId { get; set; }
        public int LocationId { get; set; }
        public int? SowId { get; set; }
        public string SupFirstName { get; set; }
        public string SupLastName { get; set; }

        public Department Department { get; set; }
        public Location Location { get; set; }
        public Sow Sow { get; set; }
        public Supervisor Sup { get; set; }
        public ICollection<EmployeeSkill> EmployeeSkill { get; set; }
    }
}

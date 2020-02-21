using System;
using System.Collections.Generic;

namespace AugTechRSI.Models
{
    public partial class Supervisor
    {
        public Supervisor()
        {
            Employee = new HashSet<Employee>();
        }

        public string SupFirstName { get; set; }
        public string SupLastName { get; set; }

        public virtual ICollection<Employee> Employee { get; set; }
    }
}

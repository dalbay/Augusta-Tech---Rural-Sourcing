using System;
using System.Collections.Generic;

namespace AugTech_RSI.Models
{
    public partial class Supervisor
    {
        public Supervisor()
        {
            Employee = new HashSet<Employee>();
        }

        public string SupFirstName { get; set; }
        public string SupLastName { get; set; }

        public ICollection<Employee> Employee { get; set; }
    }
}

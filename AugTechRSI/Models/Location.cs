using System;
using System.Collections.Generic;

namespace AugTechRSI.Models
{
    public partial class Location
    {
        public Location()
        {
            Employee = new HashSet<Employee>();
        }

        public int LocationId { get; set; }
        public string LocationName { get; set; }
        public string LocationPhone { get; set; }

        public virtual ICollection<Employee> Employee { get; set; }
    }
}

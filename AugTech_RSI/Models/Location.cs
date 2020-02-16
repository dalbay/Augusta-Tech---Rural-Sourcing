using System;
using System.Collections.Generic;

namespace AugTech_RSI.Models
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

        public ICollection<Employee> Employee { get; set; }
    }
}

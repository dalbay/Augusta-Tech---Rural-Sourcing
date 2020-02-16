using System;
using System.Collections.Generic;

namespace AugTech_RSI.Models
{
    public partial class Sow
    {
        public Sow()
        {
            Employee = new HashSet<Employee>();
        }

        public int SowId { get; set; }
        public DateTime ContractStart { get; set; }
        public DateTime ContractEnd { get; set; }
        public string ClientName { get; set; }

        public ICollection<Employee> Employee { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AugTechRSI.Models
{
    public class SPGetAllEmployees
    {
        public int UserID { get; set; }
        public string EmployeeName { get; set; }
        public string Position { get; set; }
        public string ManagerName { get; set; }
        public string DepartmentName { get; set; }
        public string LocationName { get; set; }
        public string SOW { get; set; }

    }
}

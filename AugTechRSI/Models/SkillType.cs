using System;
using System.Collections.Generic;

namespace AugTechRSI.Models
{
    public partial class SkillType
    {
        public SkillType()
        {
            Skill = new HashSet<Skill>();
        }

        public int TypeId { get; set; }
        public string TypeName { get; set; }
        public string TypeDescription { get; set; }

        public virtual ICollection<Skill> Skill { get; set; }
    }
}

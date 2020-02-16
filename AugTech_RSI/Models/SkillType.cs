using System;
using System.Collections.Generic;

namespace AugTech_RSI.Models
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

        public ICollection<Skill> Skill { get; set; }
    }
}

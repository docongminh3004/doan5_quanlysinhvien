using System;
using System.Collections.Generic;

#nullable disable

namespace project5.Models
{
    public partial class Lophoc
    {
        public Lophoc()
        {
            Ketquahoctaps = new HashSet<Ketquahoctap>();
            Lichhocs = new HashSet<Lichhoc>();
            Lichthis = new HashSet<Lichthi>();
            Sinhviens = new HashSet<Sinhvien>();
        }

        public long Malop { get; set; }
        public string Tenlop { get; set; }
        public string Gvcn { get; set; }
        public string Siso { get; set; }
        public bool? Isactive { get; set; }
        public bool? Isdelete { get; set; }
        public string Khoa { get; set; }

        public virtual ICollection<Ketquahoctap> Ketquahoctaps { get; set; }
        public virtual ICollection<Lichhoc> Lichhocs { get; set; }
        public virtual ICollection<Lichthi> Lichthis { get; set; }
        public virtual ICollection<Sinhvien> Sinhviens { get; set; }
    }
}

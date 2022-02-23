using System;
using System.Collections.Generic;

#nullable disable

namespace project5.Models
{
    public partial class Hocphan
    {
        public Hocphan()
        {
            Dangkyhoclais = new HashSet<Dangkyhoclai>();
            Ketquahoctaps = new HashSet<Ketquahoctap>();

            Lichhocs = new HashSet<Lichhoc>();
            Lichthis = new HashSet<Lichthi>();
        }

        public long Mahp { get; set; }
        public string Tenhp { get; set; }
        public int? Sotc { get; set; }
        public int? Heso { get; set; }
        public int? Hocki { get; set; }
        public string Namhoc { get; set; }
        public int? Tinhchat { get; set; }
        public string Tieude { get; set; }
        public string Code { get; set; }
        public string Nguoitao { get; set; }

        public virtual ICollection<Dangkyhoclai> Dangkyhoclais { get; set; }
        public virtual ICollection<Ketquahoctap> Ketquahoctaps { get; set; }
        public virtual ICollection<Lichhoc> Lichhocs { get; set; }
        public virtual ICollection<Lichthi> Lichthis { get; set; }
    }
}

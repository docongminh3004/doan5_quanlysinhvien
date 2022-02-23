using System;
using System.Collections.Generic;

#nullable disable

namespace project5.Models
{
    public partial class Khoanthu
    {
        public long Id { get; set; }
        public long? Masv { get; set; }
        public string Nguoinhan { get; set; }
        public int? Hocki { get; set; }
        public string Namhoc { get; set; }
        public int? Khoanthu1 { get; set; }
        public string Tenkhoanthu { get; set; }
        public int? Status { get; set; }
        public int? Dotthu { get; set; }
        public int? Hocphi { get; set; }
        public int? Sotiendanop { get; set; }
        public DateTime? Ngaynop { get; set; }
        public DateTime? Ngaytao { get; set; }
        public string Nguoitao { get; set; }

        public virtual Sinhvien MasvNavigation { get; set; }
    }
}

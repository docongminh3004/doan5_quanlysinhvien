using System;
using System.Collections.Generic;

#nullable disable

namespace project5.Models
{
    public partial class Ketquahoctap
    {
        public long Id { get; set; }
        public long? Masv { get; set; }
        public long? Malop { get; set; }
        public long? Mahp { get; set; }
        public double? Diemlan1 { get; set; }
        public double? Diemlan2 { get; set; }
        public double? Diemtb { get; set; }
        public string Ghichu { get; set; }

        public virtual Hocphan MahpNavigation { get; set; }
        public virtual Lophoc MalopNavigation { get; set; }
        public virtual Sinhvien MasvNavigation { get; set; }
    }
}

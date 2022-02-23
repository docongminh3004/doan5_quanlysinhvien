using System;
using System.Collections.Generic;

#nullable disable

namespace project5.Models
{
    public partial class Lichthi
    {
        public long Id { get; set; }
        public long? Malop { get; set; }
        public long? Masv { get; set; }
        public long? Mahp { get; set; }
        public DateTime? Ngaythi { get; set; }
        public string Phongthi { get; set; }

        public virtual Hocphan MahpNavigation { get; set; }
        public virtual Lophoc MalopNavigation { get; set; }
        public virtual Sinhvien MasvNavigation { get; set; }
    }
}

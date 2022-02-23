using System;
using System.Collections.Generic;

#nullable disable

namespace project5.Models
{
    public partial class Dangkyhoclai
    {
        public long Madk { get; set; }
        public long? Masv { get; set; }
        public long? Mahp { get; set; }
        public DateTime? Ngaydangki { get; set; }

        public virtual Hocphan MahpNavigation { get; set; }
        public virtual Sinhvien MasvNavigation { get; set; }
    }
}

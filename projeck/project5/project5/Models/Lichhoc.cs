using System;
using System.Collections.Generic;

#nullable disable

namespace project5.Models
{
    public partial class Lichhoc
    {
        public long Id { get; set; }
        public long? Malop { get; set; }
        public long? Mahp { get; set; }
        public DateTime? Ngayhoc { get; set; }
        public string Phonghoc { get; set; }
        public string Giaovien { get; set; }
        public string Tiethoc { get; set; }
        public string Buoihoc { get; set; }

        public virtual Hocphan MahpNavigation { get; set; }
        public virtual Lophoc MalopNavigation { get; set; }
    }
}

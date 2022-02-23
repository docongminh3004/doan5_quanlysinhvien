using System;
using System.Collections.Generic;

#nullable disable

namespace project5.Models
{
    public partial class Kekhai
    {
        public long Id { get; set; }
        public string Cmnd { get; set; }
        public string Dienthoai { get; set; }
        public string Diachi { get; set; }
        public DateTime? Ngaytiemmui1 { get; set; }
        public DateTime? Ngaytiemmui2 { get; set; }
        public int? Loaivacxin { get; set; }
        public string Sobaohiem { get; set; }
        public bool? Status { get; set; }
        public string Bieuhien { get; set; }
        public string Ghichu { get; set; }
        public int? Loaivacxin2 { get; set; }

        public string Hoten { get; set; }

        public string Masv { get; set; }
    }
}

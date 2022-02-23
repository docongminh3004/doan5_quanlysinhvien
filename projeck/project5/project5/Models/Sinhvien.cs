using System;
using System.Collections.Generic;

#nullable disable

namespace project5.Models
{
    public partial class Sinhvien
    {
        public Sinhvien()
        {
            Dangkyhoclais = new HashSet<Dangkyhoclai>();
            Ketquahoctaps = new HashSet<Ketquahoctap>();
            Khoanthus = new HashSet<Khoanthu>();
            Lichthis = new HashSet<Lichthi>();
        }

        public long Masv { get; set; }
        public string Tensv { get; set; }
        public long? Malop { get; set; }
        public DateTime? Ngaysinh { get; set; }
        public string Email { get; set; }
        public string Diachi { get; set; }
        public string Quequan { get; set; }
        public string Dienthoai { get; set; }
        public string Dantoc { get; set; }
        public string Tongiao { get; set; }
        public string Quoctich { get; set; }
        public string Cmnd { get; set; }
        public string Hedaotao { get; set; }
        public string Nganhhoc { get; set; }
        public string Chuyennganh { get; set; }
        public string Nienkhoa { get; set; }
        public bool? Gioitinh { get; set; }
        public string Anhthe { get; set; }
        public string Anhcmnd { get; set; }
        public string Facebook { get; set; }
        public string Matkhau { get; set; }
        public bool? Isactive { get; set; }
        public bool? Isdelete { get; set; }
        public bool? Status { get; set; }

        public virtual Lophoc MalopNavigation { get; set; }
        public virtual ICollection<Dangkyhoclai> Dangkyhoclais { get; set; }
        public virtual ICollection<Ketquahoctap> Ketquahoctaps { get; set; }
        public virtual ICollection<Khoanthu> Khoanthus { get; set; }
        public virtual ICollection<Lichthi> Lichthis { get; set; }
    }
}

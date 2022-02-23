using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace project5.Models
{
    public partial class qlsinhvienContext : DbContext
    {
        public qlsinhvienContext()
        {
        }

        public qlsinhvienContext(DbContextOptions<qlsinhvienContext> options)
            : base(options)
        {
        }
        //property đối tượng class
        public virtual DbSet<Admin> Admins { get; set; } 
        public virtual DbSet<Dangkyhoclai> Dangkyhoclais { get; set; }
        public virtual DbSet<Hocphan> Hocphans { get; set; }
        public virtual DbSet<Kekhai> Kekhais { get; set; }
        public virtual DbSet<Ketquahoctap> Ketquahoctaps { get; set; }
        public virtual DbSet<Khoanthu> Khoanthus { get; set; }
        public virtual DbSet<Lichhoc> Lichhocs { get; set; }
        public virtual DbSet<Lichthi> Lichthis { get; set; }
        public virtual DbSet<Lophoc> Lophocs { get; set; }
        public virtual DbSet<Sinhvien> Sinhviens { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseSqlServer("Name=qlsinhvien");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("admin");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Isactive).HasColumnName("isactive");

                entity.Property(e => e.Isdelete).HasColumnName("isdelete");

                entity.Property(e => e.Name).HasColumnName("name");

                entity.Property(e => e.Password)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.Property(e => e.Username)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("username");
            });

            modelBuilder.Entity<Dangkyhoclai>(entity =>
            {
                entity.HasKey(e => e.Madk);

                entity.ToTable("dangkyhoclai");

                entity.Property(e => e.Madk).HasColumnName("madk");

                entity.Property(e => e.Mahp).HasColumnName("mahp");

                entity.Property(e => e.Masv).HasColumnName("masv");

                entity.Property(e => e.Ngaydangki)
                    .HasColumnType("date")
                    .HasColumnName("ngaydangki");

                entity.HasOne(d => d.MahpNavigation)
                    .WithMany(p => p.Dangkyhoclais)
                    .HasForeignKey(d => d.Mahp)
                    .HasConstraintName("FK_dangkyhoclai_hocphan");

                entity.HasOne(d => d.MasvNavigation)
                    .WithMany(p => p.Dangkyhoclais)
                    .HasForeignKey(d => d.Masv)
                    .HasConstraintName("FK_dangkyhoclai_sinhvien");
            });

            modelBuilder.Entity<Hocphan>(entity =>
            {
                entity.HasKey(e => e.Mahp);

                entity.ToTable("hocphan");

                entity.Property(e => e.Mahp).HasColumnName("mahp");

                entity.Property(e => e.Code)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("code");

                entity.Property(e => e.Heso).HasColumnName("heso");

                entity.Property(e => e.Hocki).HasColumnName("hocki");

                entity.Property(e => e.Namhoc)
                    .HasMaxLength(50)
                    .HasColumnName("namhoc");

                entity.Property(e => e.Nguoitao)
                    .HasMaxLength(50)
                    .HasColumnName("nguoitao");

                entity.Property(e => e.Sotc).HasColumnName("sotc");

                entity.Property(e => e.Tenhp)
                    .HasMaxLength(50)
                    .HasColumnName("tenhp");

                entity.Property(e => e.Tieude)
                    .HasMaxLength(250)
                    .HasColumnName("tieude");

                entity.Property(e => e.Tinhchat).HasColumnName("tinhchat");
            });

            modelBuilder.Entity<Kekhai>(entity =>
            {
                entity.ToTable("kekhai");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Bieuhien).HasColumnName("bieuhien");

                entity.Property(e => e.Cmnd)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cmnd");

                entity.Property(e => e.Diachi)
                    .HasMaxLength(50)
                    .HasColumnName("diachi");

                entity.Property(e => e.Dienthoai)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("dienthoai");

                entity.Property(e => e.Ghichu).HasColumnName("ghichu");

                entity.Property(e => e.Loaivacxin).HasColumnName("loaivacxin");

                entity.Property(e => e.Ngaytiemmui1)
                    .HasColumnType("datetime")
                    .HasColumnName("ngaytiemmui1");

                entity.Property(e => e.Ngaytiemmui2)
                    .HasColumnType("datetime")
                    .HasColumnName("ngaytiemmui2");

                entity.Property(e => e.Sobaohiem)
                    .HasMaxLength(50)
                    .HasColumnName("sobaohiem");

                entity.Property(e => e.Loaivacxin2).HasColumnName("loaivacxin2");

                entity.Property(e => e.Hoten)
                    .HasMaxLength(50)
                    .HasColumnName("hoten");

                entity.Property(e => e.Masv)
                    .HasMaxLength(50)
                    .HasColumnName("masv");

                entity.Property(e => e.Status).HasColumnName("status");
            });

            modelBuilder.Entity<Ketquahoctap>(entity =>
            {
                entity.ToTable("ketquahoctap");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Diemlan1).HasColumnName("diemlan1");

                entity.Property(e => e.Diemlan2).HasColumnName("diemlan2");

                entity.Property(e => e.Diemtb).HasColumnName("diemtb");

                entity.Property(e => e.Ghichu)
                    .HasMaxLength(50)
                    .HasColumnName("ghichu");

                entity.Property(e => e.Mahp).HasColumnName("mahp");

                entity.Property(e => e.Malop).HasColumnName("malop");

                entity.Property(e => e.Masv).HasColumnName("masv");

                entity.HasOne(d => d.MahpNavigation)
                    .WithMany(p => p.Ketquahoctaps)
                    .HasForeignKey(d => d.Mahp)
                    .HasConstraintName("FK_ketquahoctap_hocphan");

                entity.HasOne(d => d.MalopNavigation)
                    .WithMany(p => p.Ketquahoctaps)
                    .HasForeignKey(d => d.Malop)
                    .HasConstraintName("FK_ketquahoctap_lophoc");

                entity.HasOne(d => d.MasvNavigation)
                    .WithMany(p => p.Ketquahoctaps)
                    .HasForeignKey(d => d.Masv)
                    .HasConstraintName("FK_ketquahoctap_sinhvien");
            });

            modelBuilder.Entity<Khoanthu>(entity =>
            {
                entity.ToTable("khoanthu");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Dotthu).HasColumnName("dotthu");

                entity.Property(e => e.Hocki).HasColumnName("hocki");

                entity.Property(e => e.Hocphi).HasColumnName("hocphi");

                entity.Property(e => e.Khoanthu1).HasColumnName("khoanthu1");

                entity.Property(e => e.Masv).HasColumnName("masv");

                entity.Property(e => e.Namhoc)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("namhoc");

                entity.Property(e => e.Ngaynop)
                    .HasColumnType("datetime")
                    .HasColumnName("ngaynop");

                entity.Property(e => e.Ngaytao)
                    .HasColumnType("datetime")
                    .HasColumnName("ngaytao");

                entity.Property(e => e.Nguoinhan)
                    .HasMaxLength(50)
                    .HasColumnName("nguoinhan");

                entity.Property(e => e.Nguoitao)
                    .HasMaxLength(50)
                    .HasColumnName("nguoitao");

                entity.Property(e => e.Sotiendanop).HasColumnName("sotiendanop");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.Tenkhoanthu)
                    .HasMaxLength(50)
                    .HasColumnName("tenkhoanthu");

                entity.HasOne(d => d.MasvNavigation)
                    .WithMany(p => p.Khoanthus)
                    .HasForeignKey(d => d.Masv)
                    .HasConstraintName("FK_khoanthu_sinhvien");
            });

            modelBuilder.Entity<Lichhoc>(entity =>
            {
                entity.ToTable("lichhoc");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Buoihoc)
                    .HasMaxLength(50)
                    .HasColumnName("buoihoc");

                entity.Property(e => e.Giaovien)
                    .HasMaxLength(50)
                    .HasColumnName("giaovien");

                entity.Property(e => e.Mahp).HasColumnName("mahp");

                entity.Property(e => e.Malop).HasColumnName("malop");

                entity.Property(e => e.Ngayhoc)
                    .HasColumnType("date")
                    .HasColumnName("ngayhoc");

                entity.Property(e => e.Phonghoc)
                    .HasMaxLength(50)
                    .HasColumnName("phonghoc");

                entity.Property(e => e.Tiethoc)
                    .HasMaxLength(50)
                    .HasColumnName("tiethoc");

                entity.HasOne(d => d.MahpNavigation)
                    .WithMany(p => p.Lichhocs)
                    .HasForeignKey(d => d.Mahp)
                    .HasConstraintName("FK_lichhoc_hocphan");

                entity.HasOne(d => d.MalopNavigation)
                    .WithMany(p => p.Lichhocs)
                    .HasForeignKey(d => d.Malop)
                    .HasConstraintName("FK_lichhoc_lophoc");
            });

            modelBuilder.Entity<Lichthi>(entity =>
            {
                entity.ToTable("lichthi");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Mahp).HasColumnName("mahp");

                entity.Property(e => e.Malop).HasColumnName("malop");

                entity.Property(e => e.Masv).HasColumnName("masv");

                entity.Property(e => e.Ngaythi)
                    .HasColumnType("date")
                    .HasColumnName("ngaythi");

                entity.Property(e => e.Phongthi)
                    .HasMaxLength(50)
                    .HasColumnName("phongthi");

                entity.HasOne(d => d.MahpNavigation)
                    .WithMany(p => p.Lichthis)
                    .HasForeignKey(d => d.Mahp)
                    .HasConstraintName("FK_lichthi_hocphan");

                entity.HasOne(d => d.MalopNavigation)
                    .WithMany(p => p.Lichthis)
                    .HasForeignKey(d => d.Malop)
                    .HasConstraintName("FK_lichthi_lophoc");

                entity.HasOne(d => d.MasvNavigation)
                    .WithMany(p => p.Lichthis)
                    .HasForeignKey(d => d.Masv)
                    .HasConstraintName("FK_lichthi_sinhvien");
            });

            modelBuilder.Entity<Lophoc>(entity =>
            {
                entity.HasKey(e => e.Malop);

                entity.ToTable("lophoc");

                entity.Property(e => e.Malop)
                    .ValueGeneratedNever()
                    .HasColumnName("malop");

                entity.Property(e => e.Gvcn)
                    .HasMaxLength(50)
                    .HasColumnName("gvcn");

                entity.Property(e => e.Isactive).HasColumnName("isactive");

                entity.Property(e => e.Isdelete).HasColumnName("isdelete");

                entity.Property(e => e.Khoa)
                    .HasMaxLength(50)
                    .HasColumnName("khoa");

                entity.Property(e => e.Siso)
                    .HasMaxLength(50)
                    .HasColumnName("siso");

                entity.Property(e => e.Tenlop)
                    .HasMaxLength(50)
                    .HasColumnName("tenlop");
            });

            modelBuilder.Entity<Sinhvien>(entity =>
            {
                entity.HasKey(e => e.Masv);

                entity.ToTable("sinhvien");

                entity.Property(e => e.Masv)
                    .ValueGeneratedNever()
                    .HasColumnName("masv");

                entity.Property(e => e.Anhcmnd).HasColumnName("anhcmnd");

                entity.Property(e => e.Anhthe).HasColumnName("anhthe");

                entity.Property(e => e.Chuyennganh)
                    .HasMaxLength(50)
                    .HasColumnName("chuyennganh");

                entity.Property(e => e.Cmnd)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cmnd");

                entity.Property(e => e.Dantoc)
                    .HasMaxLength(50)
                    .HasColumnName("dantoc");

                entity.Property(e => e.Diachi)
                    .HasMaxLength(50)
                    .HasColumnName("diachi");

                entity.Property(e => e.Dienthoai)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("dienthoai");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Facebook)
                    .HasMaxLength(250)
                    .HasColumnName("facebook");

                entity.Property(e => e.Gioitinh).HasColumnName("gioitinh");

                entity.Property(e => e.Hedaotao)
                    .HasMaxLength(50)
                    .HasColumnName("hedaotao");

                entity.Property(e => e.Isactive).HasColumnName("isactive");

                entity.Property(e => e.Isdelete).HasColumnName("isdelete");

                entity.Property(e => e.Malop).HasColumnName("malop");

                entity.Property(e => e.Matkhau)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("matkhau");

                entity.Property(e => e.Nganhhoc)
                    .HasMaxLength(50)
                    .HasColumnName("nganhhoc");

                entity.Property(e => e.Ngaysinh)
                    .HasColumnType("date")
                    .HasColumnName("ngaysinh");

                entity.Property(e => e.Nienkhoa)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nienkhoa");

                entity.Property(e => e.Quequan)
                    .HasMaxLength(50)
                    .HasColumnName("quequan");

                entity.Property(e => e.Quoctich)
                    .HasMaxLength(50)
                    .HasColumnName("quoctich");

                entity.Property(e => e.Status).HasColumnName("status");

                entity.Property(e => e.Tensv)
                    .HasMaxLength(50)
                    .HasColumnName("tensv");

                entity.Property(e => e.Tongiao)
                    .HasMaxLength(50)
                    .HasColumnName("tongiao");

                entity.HasOne(d => d.MalopNavigation)
                    .WithMany(p => p.Sinhviens)
                    .HasForeignKey(d => d.Malop)
                    .HasConstraintName("FK_sinhvien_lophoc");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

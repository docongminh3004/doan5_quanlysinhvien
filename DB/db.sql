USE [qlsinhvien]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 06/01/2022 5:02:08 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[admin]    Script Date: 06/01/2022 5:02:08 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[admin](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[username] [varchar](50) NULL,
	[password] [varchar](50) NULL,
	[isactive] [bit] NULL,
	[isdelete] [bit] NULL,
	[name] [nvarchar](max) NULL,
 CONSTRAINT [PK_admin] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[dangkyhoclai]    Script Date: 06/01/2022 5:02:08 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dangkyhoclai](
	[madk] [bigint] IDENTITY(1,1) NOT NULL,
	[masv] [bigint] NULL,
	[mahp] [bigint] NULL,
	[ngaydangki] [date] NULL,
 CONSTRAINT [PK_dangkyhoclai] PRIMARY KEY CLUSTERED 
(
	[madk] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[hocphan]    Script Date: 06/01/2022 5:02:08 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[hocphan](
	[mahp] [bigint] IDENTITY(1,1) NOT NULL,
	[tenhp] [nvarchar](50) NULL,
	[sotc] [int] NULL,
	[heso] [int] NULL,
	[hocki] [int] NULL,
	[namhoc] [nvarchar](50) NULL,
	[tinhchat] [int] NULL,
	[tieude] [nvarchar](250) NULL,
	[code] [varchar](50) NULL,
	[nguoitao] [nvarchar](50) NULL,
 CONSTRAINT [PK_hocphan] PRIMARY KEY CLUSTERED 
(
	[mahp] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[kekhai]    Script Date: 06/01/2022 5:02:08 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[kekhai](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[cmnd] [varchar](50) NULL,
	[dienthoai] [varchar](50) NULL,
	[diachi] [nvarchar](50) NULL,
	[ngaytiemmui1] [datetime] NULL,
	[ngaytiemmui2] [datetime] NULL,
	[loaivacxin] [int] NULL,
	[sobaohiem] [nvarchar](50) NULL,
	[status] [bit] NULL,
	[bieuhien] [nvarchar](max) NULL,
	[ghichu] [nvarchar](max) NULL,
	[loaivacxin2] [int] NULL,
	[hoten] [nvarchar](50) NULL,
	[masv] [nvarchar](50) NULL,
 CONSTRAINT [PK_kekhai] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ketquahoctap]    Script Date: 06/01/2022 5:02:08 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ketquahoctap](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[masv] [bigint] NULL,
	[malop] [bigint] NULL,
	[mahp] [bigint] NULL,
	[diemlan1] [float] NULL,
	[diemlan2] [float] NULL,
	[diemtb] [float] NULL,
	[ghichu] [nvarchar](50) NULL,
 CONSTRAINT [PK_ketquahoctap] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[khoanthu]    Script Date: 06/01/2022 5:02:08 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[khoanthu](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[masv] [bigint] NULL,
	[nguoinhan] [nvarchar](50) NULL,
	[hocki] [int] NULL,
	[namhoc] [varchar](50) NULL,
	[khoanthu1] [int] NULL,
	[tenkhoanthu] [nvarchar](50) NULL,
	[status] [int] NULL,
	[dotthu] [int] NULL,
	[hocphi] [int] NULL,
	[sotiendanop] [int] NULL,
	[ngaynop] [datetime] NULL,
	[ngaytao] [datetime] NULL,
	[nguoitao] [nvarchar](50) NULL,
 CONSTRAINT [PK_khoanthu] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[lichhoc]    Script Date: 06/01/2022 5:02:08 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lichhoc](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[malop] [bigint] NULL,
	[mahp] [bigint] NULL,
	[ngayhoc] [date] NULL,
	[phonghoc] [nvarchar](50) NULL,
	[giaovien] [nvarchar](50) NULL,
	[tiethoc] [nvarchar](50) NULL,
	[buoihoc] [nvarchar](50) NULL,
 CONSTRAINT [PK_lichhoc] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[lichthi]    Script Date: 06/01/2022 5:02:08 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lichthi](
	[id] [bigint] IDENTITY(1,1) NOT NULL,
	[malop] [bigint] NULL,
	[masv] [bigint] NULL,
	[mahp] [bigint] NULL,
	[ngaythi] [date] NULL,
	[phongthi] [nvarchar](50) NULL,
 CONSTRAINT [PK_ketquadangkyhoc_1] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[lophoc]    Script Date: 06/01/2022 5:02:08 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[lophoc](
	[malop] [bigint] NOT NULL,
	[tenlop] [nvarchar](50) NULL,
	[gvcn] [nvarchar](50) NULL,
	[siso] [nvarchar](50) NULL,
	[isactive] [bit] NULL,
	[isdelete] [bit] NULL,
	[khoa] [nvarchar](50) NULL,
 CONSTRAINT [PK_lophoc] PRIMARY KEY CLUSTERED 
(
	[malop] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sinhvien]    Script Date: 06/01/2022 5:02:08 CH ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sinhvien](
	[masv] [bigint] NOT NULL,
	[tensv] [nvarchar](50) NULL,
	[malop] [bigint] NULL,
	[ngaysinh] [date] NULL,
	[email] [varchar](50) NULL,
	[diachi] [nvarchar](50) NULL,
	[quequan] [nvarchar](50) NULL,
	[dienthoai] [varchar](50) NULL,
	[dantoc] [nvarchar](50) NULL,
	[tongiao] [nvarchar](50) NULL,
	[quoctich] [nvarchar](50) NULL,
	[cmnd] [varchar](50) NULL,
	[hedaotao] [nvarchar](50) NULL,
	[nganhhoc] [nvarchar](50) NULL,
	[chuyennganh] [nvarchar](50) NULL,
	[nienkhoa] [varchar](50) NULL,
	[gioitinh] [bit] NULL,
	[anhthe] [nvarchar](max) NULL,
	[anhcmnd] [nvarchar](max) NULL,
	[facebook] [nvarchar](250) NULL,
	[matkhau] [varchar](50) NULL,
	[isactive] [bit] NULL,
	[isdelete] [bit] NULL,
	[status] [bit] NULL,
 CONSTRAINT [PK_sinhvien] PRIMARY KEY CLUSTERED 
(
	[masv] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[dangkyhoclai]  WITH CHECK ADD  CONSTRAINT [FK_dangkyhoclai_hocphan] FOREIGN KEY([mahp])
REFERENCES [dbo].[hocphan] ([mahp])
GO
ALTER TABLE [dbo].[dangkyhoclai] CHECK CONSTRAINT [FK_dangkyhoclai_hocphan]
GO
ALTER TABLE [dbo].[dangkyhoclai]  WITH CHECK ADD  CONSTRAINT [FK_dangkyhoclai_sinhvien] FOREIGN KEY([masv])
REFERENCES [dbo].[sinhvien] ([masv])
GO
ALTER TABLE [dbo].[dangkyhoclai] CHECK CONSTRAINT [FK_dangkyhoclai_sinhvien]
GO
ALTER TABLE [dbo].[ketquahoctap]  WITH CHECK ADD  CONSTRAINT [FK_ketquahoctap_hocphan] FOREIGN KEY([mahp])
REFERENCES [dbo].[hocphan] ([mahp])
GO
ALTER TABLE [dbo].[ketquahoctap] CHECK CONSTRAINT [FK_ketquahoctap_hocphan]
GO
ALTER TABLE [dbo].[ketquahoctap]  WITH CHECK ADD  CONSTRAINT [FK_ketquahoctap_lophoc] FOREIGN KEY([malop])
REFERENCES [dbo].[lophoc] ([malop])
GO
ALTER TABLE [dbo].[ketquahoctap] CHECK CONSTRAINT [FK_ketquahoctap_lophoc]
GO
ALTER TABLE [dbo].[ketquahoctap]  WITH CHECK ADD  CONSTRAINT [FK_ketquahoctap_sinhvien] FOREIGN KEY([masv])
REFERENCES [dbo].[sinhvien] ([masv])
GO
ALTER TABLE [dbo].[ketquahoctap] CHECK CONSTRAINT [FK_ketquahoctap_sinhvien]
GO
ALTER TABLE [dbo].[khoanthu]  WITH CHECK ADD  CONSTRAINT [FK_khoanthu_sinhvien] FOREIGN KEY([masv])
REFERENCES [dbo].[sinhvien] ([masv])
GO
ALTER TABLE [dbo].[khoanthu] CHECK CONSTRAINT [FK_khoanthu_sinhvien]
GO
ALTER TABLE [dbo].[lichhoc]  WITH CHECK ADD  CONSTRAINT [FK_lichhoc_hocphan] FOREIGN KEY([mahp])
REFERENCES [dbo].[hocphan] ([mahp])
GO
ALTER TABLE [dbo].[lichhoc] CHECK CONSTRAINT [FK_lichhoc_hocphan]
GO
ALTER TABLE [dbo].[lichhoc]  WITH CHECK ADD  CONSTRAINT [FK_lichhoc_lophoc] FOREIGN KEY([malop])
REFERENCES [dbo].[lophoc] ([malop])
GO
ALTER TABLE [dbo].[lichhoc] CHECK CONSTRAINT [FK_lichhoc_lophoc]
GO
ALTER TABLE [dbo].[lichthi]  WITH CHECK ADD  CONSTRAINT [FK_lichthi_hocphan] FOREIGN KEY([mahp])
REFERENCES [dbo].[hocphan] ([mahp])
GO
ALTER TABLE [dbo].[lichthi] CHECK CONSTRAINT [FK_lichthi_hocphan]
GO
ALTER TABLE [dbo].[lichthi]  WITH CHECK ADD  CONSTRAINT [FK_lichthi_lophoc] FOREIGN KEY([malop])
REFERENCES [dbo].[lophoc] ([malop])
GO
ALTER TABLE [dbo].[lichthi] CHECK CONSTRAINT [FK_lichthi_lophoc]
GO
ALTER TABLE [dbo].[lichthi]  WITH CHECK ADD  CONSTRAINT [FK_lichthi_sinhvien] FOREIGN KEY([masv])
REFERENCES [dbo].[sinhvien] ([masv])
GO
ALTER TABLE [dbo].[lichthi] CHECK CONSTRAINT [FK_lichthi_sinhvien]
GO
ALTER TABLE [dbo].[sinhvien]  WITH CHECK ADD  CONSTRAINT [FK_sinhvien_lophoc] FOREIGN KEY([malop])
REFERENCES [dbo].[lophoc] ([malop])
GO
ALTER TABLE [dbo].[sinhvien] CHECK CONSTRAINT [FK_sinhvien_lophoc]
GO

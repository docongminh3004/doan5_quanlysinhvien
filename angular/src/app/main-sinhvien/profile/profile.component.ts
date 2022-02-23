import { Component, OnInit } from '@angular/core';
import { SinhvienService } from 'src/app/services/sinhvien.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private sinhvienService:SinhvienService) { }
  tensv:any;
  malop:any;
  ngaysinh:any;
  email:any;diachi:any;
  quequan:any;
  dienthoai:any;
  dantoc:any;
  tongiao:any;
  quoctich:any;
  cmnd:any;
  hedaotao:any;
  nganhhoc:any;
  chuyennganh:any;
  nienkhoa:any;
  gioitinh:any;
  anhthe:any;
  anhcmnd:any;
  facebook:any;
  matkhau:any;
  masv:any;
  //
  PhotoFilePath:any;
  user:any;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('sinhvien') || '{}');
    this.masv = this.user.masv,
    this.tensv = this.user.tensv,
    this.diachi = this.user.diachi,
    this.email = this.user.email,
    this.dienthoai = this.user.dienthoai,
    this.facebook=this.user.facebook,
    this.malop=this.user.malop,
    this.matkhau = this.user.matkhau,
    this.gioitinh = this.user.gioitinh,
    this.ngaysinh = this.user.ngaysinh,
    this.anhcmnd=this.user.anhcmnd
    this.quequan = this.user.quequan,
    this.dantoc = this.user.dantoc,
    this.tongiao = this.user.tongiao,
    this.quoctich = this.user.quoctich,
    this.dienthoai = this.user.dienthoai,
    this.cmnd = this.user.cmnd,
    this.hedaotao = this.user.hedaotao,
    this.nganhhoc = this.user.nganhhoc,
    this.nienkhoa = this.user.nienkhoa,
    this.chuyennganh=this.user.chuyennganh
  }
  update() {
    var val = {
      masv: this.user.masv,
      malop: this.user.malop,
      tensv: this.tensv,
      diachi: this.diachi,
      email: this.email,
      quequan: this.quequan,
      matkhau: this.matkhau,
      dienthoai: this.dienthoai,
      gioitinh:this.gioitinh,
      ngaysinh:this.ngaysinh,
      anhcmnd:this.anhcmnd,
      dantoc: this.dantoc,
      tongiao: this.tongiao,
      nganhhoc: this.nganhhoc,
      chuyennganh: this.chuyennganh,
      hedaotao: this.hedaotao,
      nienkhoa: this.nienkhoa,
      quoctich: this.quoctich,
      anhthe:this.anhthe,
      facebook:this.facebook,
      cmnd:this.cmnd
     
    }
    this.sinhvienService.updateprofile(val).subscribe(res => {
      
      alert("Đã sửa thông tin cá nhân,yêu cầu bạn đăng nhập lại");
      console.log(res);
       this.logout();
    });
  }
  logout() {
    this.sinhvienService.logout();
    location.reload();
  }
  public uploadPhoto(event: any) {
    var file = event.target.files[0];
    console.log(file)
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file);
    console.log(formData)
    this.sinhvienService.UploadPhoto(formData).subscribe((data: any) => {
      this.anhcmnd = data.toString();
      this.PhotoFilePath = this.sinhvienService.PhotoUrl + this.anhcmnd;
    })
  }
}

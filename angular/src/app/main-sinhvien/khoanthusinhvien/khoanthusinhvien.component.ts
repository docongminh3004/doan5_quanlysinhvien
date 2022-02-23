import { Component, OnInit } from '@angular/core';
import { SinhvienService } from 'src/app/services/sinhvien.service';

@Component({
  selector: 'app-khoanthusinhvien',
  templateUrl: './khoanthusinhvien.component.html',
  styleUrls: ['./khoanthusinhvien.component.css']
})
export class KhoanthusinhvienComponent implements OnInit {

  constructor(private sinhvienService:SinhvienService) { }
  sinhviens:any=[];
  sv:any;
  ngOnInit(): void {
    //khi đăng nhập các thông tin gồm mã sv,họ tên,...localStorage.getItem('sinhvien')
    this.sv = JSON.parse(localStorage.getItem('sinhvien')|| '{}');
    this.XemKhoanThu(this.sv.masv);//lấy ra thông tin mã sv.
  }
  //sinh viên xem khoản thu
  XemKhoanThu(masv:any) {
    //this.spinner.show();
    this.sinhvienService.XemKhoanThu(masv).subscribe(data => {
      this.sinhviens = data;
   //   this.totalLength = data.length;
      console.log(this.sinhviens);
     // this.spinner.hide();
    });
  }

}

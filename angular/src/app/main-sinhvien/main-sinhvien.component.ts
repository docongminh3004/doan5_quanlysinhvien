import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SinhvienService } from '../services/sinhvien.service';

@Component({
  selector: 'app-main-sinhvien',
  templateUrl: './main-sinhvien.component.html',
  styleUrls: ['./main-sinhvien.component.css']
})
export class MainSinhvienComponent implements OnInit {

  constructor(private router: Router, private sinhvienService: SinhvienService) { }
  sv: any=[];
  tensv:any;
  anhcmnd:any;
  chuyennganh:any;
  masv:any;
  ngOnInit(): void {
    this.sv = JSON.parse(localStorage.getItem('sinhvien')|| '{}');
      this.tensv =this.sv.tensv;
      this.anhcmnd=this.sv.anhcmnd;//lay tt anh dai dien
      this.chuyennganh=this.sv.chuyennganh;
      this.masv=this.sv.masv;
      console.log(this.tensv);
    if(this.sv!=null){
      this.sv=parseInt(this.sv);
    }
    
  }
  logout() {

    if (this.sv!= 0) {
      this.sinhvienService.logout();
      alert("Đã đăng xuất");
     
      setTimeout(() => {
        this.router.navigateByUrl('/sinhvien/login');
      }, 1000);
    }
    
  }

}

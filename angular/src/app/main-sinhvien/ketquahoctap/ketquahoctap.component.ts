import { Component, OnInit } from '@angular/core';
import { SinhvienService } from 'src/app/services/sinhvien.service';

@Component({
  selector: 'app-ketquahoctap',
  templateUrl: './ketquahoctap.component.html',
  styleUrls: ['./ketquahoctap.component.css']
})
export class KetquahoctapComponent implements OnInit {

  constructor(private sinhvienService:SinhvienService) { }
  sinhviens:any=[];
  sv:any;
  ngOnInit(): void {
    this.sv = JSON.parse(localStorage.getItem('sinhvien')|| '{}');
    this.Dsdiem(this.sv.masv);
  }
  Dsdiem(magv:any) {
    //this.spinner.show();
    this.sinhvienService.xemdiemthi(magv).subscribe(data => {
      this.sinhviens = data;
   //   this.totalLength = data.length;
      console.log(this.sinhviens);
     // this.spinner.hide();
    });
  }

}

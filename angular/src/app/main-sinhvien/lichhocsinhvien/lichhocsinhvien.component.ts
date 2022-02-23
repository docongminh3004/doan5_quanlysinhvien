import { Component, OnInit } from '@angular/core';
import { LichhocService } from 'src/app/services/lichhoc.service';

@Component({
  selector: 'app-lichhocsinhvien',
  templateUrl: './lichhocsinhvien.component.html',
  styleUrls: ['./lichhocsinhvien.component.css']
})
export class LichhocsinhvienComponent implements OnInit {

  constructor(private lichhocService:LichhocService) { }
  lichhocs:any;
  totalLength:any;
  ngOnInit(): void {
    this.Dslichhoc();
  }
  Dslichhoc() {
    //  this.spinner.show();
      this.lichhocService.getAll().subscribe(data => {
        this.lichhocs = data;
        this.totalLength = data.length;
        console.log(this.lichhocs);
        
      });
    }
}

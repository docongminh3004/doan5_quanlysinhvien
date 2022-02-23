import { Component, OnInit } from '@angular/core';

import { LichthiService } from 'src/app/services/lichthi.service';

@Component({
  selector: 'app-lichthi',
  templateUrl: './lichthi.component.html',
  styleUrls: ['./lichthi.component.css']
})
export class LichthiComponent implements OnInit {
  lichthis:any;
  totalLength:any;
  constructor(private lichthiService:LichthiService) { }

  ngOnInit(): void {
       this.Dslichthi();
  }
  Dslichthi() {
    //  this.spinner.show();
    this.lichthiService.getAll().subscribe(data => {
      this.lichthis = data;
      this.totalLength = data.length;
      console.log(this.lichthis);
     
    });
  }

}

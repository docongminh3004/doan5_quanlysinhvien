import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-khoanthu',
  templateUrl: './khoanthu.component.html',
  styleUrls: ['./khoanthu.component.css']
})
export class KhoanthuComponent implements OnInit {

  constructor(private adminService:AdminService, private fb: FormBuilder) { }
  checkSearch:boolean=false;
  page: any = 1;
  totalLength: any;
  txtSearchName: any = '';
  sortByName: any = "chọn";
  totalRecords:any;
  sortByCreatedDate:any;
  //taoj 1 doi tuong null
  khoanthus:any =[];
  sinhviens:any=[];
  formAdd !: FormGroup;
  masv:any;

  ngOnInit(): void {
    this.  LoadKhoanThu()
    this. Dssinhvien();

    //form add
    this.formAdd = this.fb.group({
      masv: this.fb.control('', [Validators.required]),
      nguoinhan: this.fb.control('',[Validators.required]),
      hocki: this.fb.control('', [Validators.required]),
      namhoc: this.fb.control('', [Validators.required]),
      khoanthu1: this.fb.control('', [Validators.required]),
      status: this.fb.control('', [Validators.required]),
      dotthu: this.fb.control('', [Validators.required]),
      hocphi: this.fb.control('', [Validators.required]),
      sotiendanop: this.fb.control('', [Validators.required]),
      ngaynop: this.fb.control('', [Validators.required]),
      ngaytao: this.fb.control('', [Validators.required]),
      nguoitao: this.fb.control('', [Validators.required]),
      
    });
  }

  
  LoadKhoanThu() {
    //  this.spinner.show();
      this.adminService.khoanthu().subscribe(data => {
        this.khoanthus = data;
        this.totalLength = data.length;
      
      });
    }
  Dssinhvien(){
    this.adminService.getsinhvien().subscribe((data: any) => {
      this.sinhviens = data;//lay du lieu 
      this.masv=this.masv;
      console.log(data);
     
    });
  }
  add() {
  
    this.adminService.themkhoanthu(this.formAdd.value).subscribe((data: any) => {
       alert("đã thêm thành công");
       this.LoadKhoanThu();
       location.reload();
    })

  }
  closeClick(){

  }
  clearFormAdd(){
    this.formAdd.reset();
  }
}

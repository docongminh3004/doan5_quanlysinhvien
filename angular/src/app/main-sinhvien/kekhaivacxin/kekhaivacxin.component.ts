import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SinhvienService } from 'src/app/services/sinhvien.service';

@Component({
  selector: 'app-kekhaivacxin',
  templateUrl: './kekhaivacxin.component.html',
  styleUrls: ['./kekhaivacxin.component.css']
})
export class KekhaivacxinComponent implements OnInit {

  constructor(private sinhvienService:SinhvienService, private fb: FormBuilder,  private router: Router, ) { }


 formAdd !: FormGroup;

  ngOnInit(): void {

     //form add
     this.formAdd = this.fb.group({
      cmnd: this.fb.control('', [Validators.required]),
      dienthoai: this.fb.control('',[Validators.required]),
      diachi: this.fb.control('', [Validators.required]),
      ngaytiemmui1: this.fb.control('', [Validators.required]),
      ngaytiemmui2: this.fb.control('', [Validators.required]),
      status: this.fb.control(false),
      loaivacxin: this.fb.control('', [Validators.required]),
      sobaohiem: this.fb.control('', [Validators.required]),
      bieuhien: this.fb.control('', [Validators.required]),
      ghichu: this.fb.control('', [Validators.required]),
      loaivacxin2: this.fb.control('', [Validators.required]),
      hoten: this.fb.control('', [Validators.required]),
      masv: this.fb.control('', [Validators.required]),
     
      
    });
  }

  add() {
  
    this.sinhvienService.Khaibaovacxin(this.formAdd.value).subscribe((data: any) => {
       alert("Khai báo thành công,quay trở lại trang chủ");
       setTimeout(() => { //setTimeout khi thêm thành công sau 1 giây nó sẽ điều hướng đến hàm dưới navigateByUrl
        this.router.navigateByUrl('/sinhvien/dashboard');//router.navigateByUrl là hàm điều hướng đến trang khác ví dụ sinhvien/dashboard
      }, 2000); //1000 đại diện là 1 giây / 2000 là 2 giây
    
    })

  }
  closeClick(){

  }
  clearFormAdd(){
    this.formAdd.reset();
  }

}

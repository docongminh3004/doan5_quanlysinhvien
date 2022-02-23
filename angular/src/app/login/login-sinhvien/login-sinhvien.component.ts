import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SinhvienService } from 'src/app/services/sinhvien.service';

@Component({
  selector: 'app-login-sinhvien',
  templateUrl: './login-sinhvien.component.html',
  styleUrls: ['./login-sinhvien.component.css']
})
export class LoginSinhvienComponent implements OnInit {

  formLogin !: FormGroup ;
  constructor(
    private fb: FormBuilder,
    private sinhvienService: SinhvienService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      masv: this.fb.control('', [Validators.required]),
      matkhau: this.fb.control('', [
        Validators.required,
         Validators.minLength(6),
      ]),
    });
  }
  onLogin() {
    var adminLogin = {
      masv : this.formLogin.get('masv')?.value ,
      matkhau: this.formLogin.get('matkhau') ?.value 
    };

    this.sinhvienService
      .login(adminLogin)
    
      .subscribe(
        (admin) => {
          if (admin == null) {
            alert("tài khoản hoặc mật khẩu chưa chính xác")
            this.clearFormLogin();
            
          } else if(admin!="") {
            
            alert("welcome to sinh vien");
            setTimeout(() => {
              this.router.navigateByUrl('/sinhvien/dashboard');
            }, 1000);
          }
          console.log(admin);//log các thông tin đã đăng nhập
        },
        (error) => {
          console.log(error);
        }
      );
  }
  clearFormLogin() {
    this.formLogin.reset();
  }

}

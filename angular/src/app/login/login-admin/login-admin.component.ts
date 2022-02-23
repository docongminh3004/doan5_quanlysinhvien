import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  formLogin !: FormGroup ;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void { // viết 
    this.formLogin = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
         Validators.minLength(6),
      ]),
    });
  }
  onLogin() {
    var adminLogin = {
      username : this.formLogin.get('username')?.value ,
      password: this.formLogin.get('password') ?.value 
    };

    this.adminService
      .login(adminLogin)
    
      .subscribe(
        (admin) => {
          if (admin == null) {
            alert("tài khoản hoặc mật khẩu chưa chính xác")
            this.clearFormLogin();
            
          } else if(admin!="") {
            
            alert("welcome to admin");
            setTimeout(() => {
              this.router.navigateByUrl('/admin/home');
            }, 1000);
          }
          console.log(admin);
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

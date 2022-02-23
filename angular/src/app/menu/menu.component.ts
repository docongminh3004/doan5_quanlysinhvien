import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private adminService:AdminService,private router: Router,) { }

  admin: any=[];
  name:any;
  ngOnInit(): void {
    this. admin = JSON.parse(localStorage.getItem('admin')|| '{}');
      this.name =this.admin.name;
    if(this.admin!=null){
      this.admin=parseInt(this.admin);
    }
  }
  logout() {

    if (this.admin!= 0) {
      this.adminService.logout();
      alert("Đã đăng xuất ");
      location.reload();
      setTimeout(() => {
        this.router.navigateByUrl('/admin/home');
      }, 1000);
    }
    
  }
}

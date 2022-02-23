import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';//dùng thư viện rxjs này để đăng nhập và đx
import { map } from 'rxjs/operators'; //dùng map trong operators trong thư viện rxjs
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private API_URL = 'http://localhost:33970/api';
  private adminLogin = new BehaviorSubject({});
  public admin$ = this.adminLogin.asObservable();
  constructor(private readonly http: HttpClient) { }
  login(login: any): Observable<any> {
    const url = `${this.API_URL}/admins/login`;
    var log = JSON.stringify(login);
    return this.http.post<any>(url, log, httpOptions).pipe(
      map((admin) => {
        //debugger;
        localStorage.setItem('admin', JSON.stringify(admin));
        this.adminLogin.next(admin);
        return admin;
      })
    );
  }
  //dang xuat
  logout() {
    localStorage.removeItem('admin');
    this.adminLogin.next(null!);
  }
  //
  
  // hoc phi
  khoanthu(): Observable<any> {
    const url = `${this.API_URL}/admins/khoanthu`;
   
    return this.http.get<any>(url, httpOptions);
  }

  //them khoan thu
  themkhoanthu(val: any) {
    return this.http.post(this.API_URL + '/admins/themkhoanthu/', val);
  }

  getsinhvien(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL + '/admins/getsinhvien');
  }
}

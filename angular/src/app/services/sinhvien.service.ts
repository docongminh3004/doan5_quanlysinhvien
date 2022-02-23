import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class SinhvienService {

  public readonly APIUrl="http://localhost:33970/api";
  readonly PhotoUrl = "http://localhost:33970/image/sinhvien";

  constructor(private http: HttpClient) { }
  private sinhvienLogin = new BehaviorSubject({});
  public sinhvien$ = this.sinhvienLogin.asObservable();
 
  login(login: any): Observable<any> {
    const url = `${this.APIUrl}/sinhviens/login`;
    var log = JSON.stringify(login);
    return this.http.post<any>(url, log, httpOptions).pipe(
      map((sinhvien) => {
        //debugger;
        localStorage.setItem('sinhvien', JSON.stringify(sinhvien));
        this.sinhvienLogin.next(sinhvien);
        return sinhvien;
      })
    );
  }
  //dang xuat
  logout() {
    localStorage.removeItem('sinhvien');
    this.sinhvienLogin.next(null!);
  }
  getAll():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/sinhviens');
  }
  getByid(masv: any): Observable<any> {
    const url = `${this.APIUrl}/sinhviens/${masv}`;
    return this.http.get<any>(url);
  }
 
  add(sinhvien: any): Observable<number> {
    const url = `${this.APIUrl}/sinhviens`;
    var body = JSON.stringify(sinhvien);
    return this.http.post<any>(url, body, httpOptions);
  }
  
  delete(malop:any){
    return this.http.delete(this.APIUrl+'/sinhviens/'+malop);
  }
  update(masv: any, sinhvien: any): Observable<number> {
    const url = `${this.APIUrl}/sinhviens/${masv}`;
    var body = JSON.stringify(sinhvien);
    return this.http.put<any>(url, body, httpOptions);
  }
  getLophoc():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/sinhviens/GetLophoc');
  }
  updateprofile(val:any){
    return this.http.put(this.APIUrl+'/sinhviens/updateprofile',val);
  }
  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/sinhviens/SaveFile',val);
  }

  xemdiemthi(malop: any): Observable<any> {
    const url = `${this.APIUrl}/ketquahoctaps/xemketqua/${malop}`;
    return this.http.get<any>(url);
  }

  // đóng học phí
  //sinh viên có thể xem những khoản học phí đã đóng
  XemKhoanThu(masv: any): Observable<any> {
    const url = `${this.APIUrl}/sinhviens/XemKhoanThu/${masv}`;
    return this.http.get<any>(url);
  }

  // THem ke khai vacxin
  Khaibaovacxin(kekhaivacxin: any): Observable<number> {
    const url = `${this.APIUrl}/sinhviens/Khaibaovacxin/`;
    var body = JSON.stringify(kekhaivacxin);
    return this.http.post<any>(url, body, httpOptions);
  }
}

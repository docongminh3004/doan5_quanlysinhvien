import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class KetquahoctapService {

  readonly APIUrl="http://localhost:33970/api";
  constructor(private http: HttpClient) { }
  getAll():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ketquahoctaps');
  }
  getByid(malop: any): Observable<any> {
    const url = `${this.APIUrl}/ketquahoctaps/${malop}`;
    return this.http.get<any>(url);
  }

  add(lichthi: any): Observable<number> {
    const url = `${this.APIUrl}/ketquahoctaps`;
    var body = JSON.stringify(lichthi);
    return this.http.post<any>(url, body, httpOptions);
  }

  
  delete(malop:any){
    return this.http.delete(this.APIUrl+'/ketquahoctaps/'+malop);
  }
  update(malop: any, lichthi: any): Observable<number> {
    const url = `${this.APIUrl}/ketquahoctaps/${malop}`;
    var body = JSON.stringify(lichthi);
    return this.http.put<any>(url, body, httpOptions);
  }
  getsv():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ketquahoctaps/getsv');
  }
  gethocphan():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/ketquahoctaps/gethocphan');
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class LophocService {

  readonly APIUrl="http://localhost:33970/api";
  constructor(private http: HttpClient) { }
  getAll():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/lophocs');
  }
  getByid(malop: any): Observable<any> {
    const url = `${this.APIUrl}/lophocs/${malop}`;
    return this.http.get<any>(url);
  }

  add(lophoc: any): Observable<number> {
    const url = `${this.APIUrl}/lophocs`;
    var body = JSON.stringify(lophoc);
    return this.http.post<any>(url, body, httpOptions);
  }

  
  delete(malop:any){
    return this.http.delete(this.APIUrl+'/lophocs/'+malop);
  }
  update(malop: any, lophoc: any): Observable<number> {
    const url = `${this.APIUrl}/lophocs/${malop}`;
    var body = JSON.stringify(lophoc);
    return this.http.put<any>(url, body, httpOptions);
  }
  
 
}

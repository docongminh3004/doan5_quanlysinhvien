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
export class LichhocService {
 

  readonly APIUrl="http://localhost:33970/api";
  constructor(private http: HttpClient) { }
  getAll():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/lichhocs');
  }
  getByid(malop: any): Observable<any> {
    const url = `${this.APIUrl}/lichhocs/${malop}`;
    return this.http.get<any>(url);
  }

  add(lophoc: any): Observable<number> {
    const url = `${this.APIUrl}/lichhocs`;
    var body = JSON.stringify(lophoc);
    return this.http.post<any>(url, body, httpOptions);
  }

  
  delete(malop:any){
    return this.http.delete(this.APIUrl+'/lichhocs/'+malop);
  }
  update(malop: any, lophoc: any): Observable<number> {
    const url = `${this.APIUrl}/lichhocs/${malop}`;
    var body = JSON.stringify(lophoc);
    return this.http.put<any>(url, body, httpOptions);
  }
  getlophoc():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/lichhocs/getlophoc');
  }
  gethocphan():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/lichhocs/gethocphan');
  }
}

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
export class LichthiService {

  readonly APIUrl="http://localhost:33970/api";
  constructor(private http: HttpClient) { }
  getAll():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/lichthis');
  }
  getByid(malop: any): Observable<any> {
    const url = `${this.APIUrl}/lichthis/${malop}`;
    return this.http.get<any>(url);
  }

  add(lichthi: any): Observable<number> {
    const url = `${this.APIUrl}/lichthis`;
    var body = JSON.stringify(lichthi);
    return this.http.post<any>(url, body, httpOptions);
  }

  
  delete(malop:any){
    return this.http.delete(this.APIUrl+'/lichthis/'+malop);
  }
  update(malop: any, lichthi: any): Observable<number> {
    const url = `${this.APIUrl}/lichthis/${malop}`;
    var body = JSON.stringify(lichthi);
    return this.http.put<any>(url, body, httpOptions);
  }
  getlophoc():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/lichthis/getlophoc');
  }
  gethocphan():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/lichthis/gethocphan');
  }
}

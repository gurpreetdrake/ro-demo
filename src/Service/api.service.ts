import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {WarrantyreportsModel} from '../Model/warrantyreports'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token = '';
  apiURL: string = 'https://shielded-sands-78532.herokuapp.com'
  constructor(private httpClient: HttpClient) {

  }

  getHttpOptions(){
    return {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }
  }

  getToken(idn: string, pwd: string){
    this.httpClient.post(`${this.apiURL}/auth/local`, 
    {
      "identifier": idn,
      "password": pwd
    })
    .subscribe((res)=>{
      this.token = res['jwt'];
    });
  }

  public getWarrantyReports(){
    return this.httpClient.get<WarrantyreportsModel[]>(`${this.apiURL}/warranties`, this.getHttpOptions());
  }
  
  public addWarranty(warranty: WarrantyreportsModel){
    return this.httpClient.post(`${this.apiURL}/warranties`, warranty, this.getHttpOptions());
  }

  public updateWarranty(warranty: WarrantyreportsModel){
    return this.httpClient.put(`${this.apiURL}/warranties/${warranty.id}`, warranty, this.getHttpOptions());
  }

  public deleteWarrantyReports(id: number){
    return this.httpClient.delete(`${this.apiURL}/warranties/${id}`, this.getHttpOptions());
  }
}

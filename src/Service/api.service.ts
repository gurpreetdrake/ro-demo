import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {WarrantyreportsModel} from '../Model/warrantyreports'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://shielded-sands-78532.herokuapp.com'
  constructor(private httpClient: HttpClient) { }

  public getWarrantyReports(){
    return this.httpClient.get(`${this.apiURL}/warranties`);
  }
  public deleteWarrantyReports(id: number){
    return this.httpClient.delete(`${this.apiURL}/warranties/${id}`);
}
}

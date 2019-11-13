import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Warrantyreports} from '../Model/warrantyreports'
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  apiURL: string = 'https://shielded-sands-78532.herokuapp.com/warranties'
  constructor(private httpClient: HttpClient) { }
  public getWarrantyReports(url?: string){}
}

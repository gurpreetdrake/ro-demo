import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WarrantyreportsModel } from '../Model/warrantyreports';
import {DocumentModel} from '../Model/documentmodel';
import { VideoModel } from '../Model/videomodel';
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
    console.log(this.getHttpOptions())
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

  public getDocData(){
    return this.httpClient.get<DocumentModel[]>(`${this.apiURL}/documents`);
  }
  public addImgData(img: DocumentModel){
    return this.httpClient.post(`${this.apiURL}/documents`, img);
  }
  public deleteDocData(id: number){
    return this.httpClient.delete(`${this.apiURL}/documents/${id}`);
  }

  public getVideosData(){
    return this.httpClient.get<VideoModel[]>(`${this.apiURL}/videos`);
  }
  public addVideosData(vid: VideoModel){
    return this.httpClient.post(`${this.apiURL}/videos`, vid);
  }
  public deleteVideosData(id: number){
    return this.httpClient.delete(`${this.apiURL}/videos/${id}`);
  }
}

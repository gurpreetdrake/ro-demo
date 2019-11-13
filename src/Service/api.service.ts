import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WarrantyreportsModel } from '../Model/warrantyreports'
import { ImageModel } from '../Model/imagemodel'
import { VideoModel } from '../Model/videomodel'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://shielded-sands-78532.herokuapp.com'
  constructor(private httpClient: HttpClient) { }

  public getWarrantyReports(){
    return this.httpClient.get<WarrantyreportsModel[]>(`${this.apiURL}/warranties`);
  }
  
  public addWarranty(warranty: WarrantyreportsModel){
    return this.httpClient.post(`${this.apiURL}/warranties`, warranty);
  }

  public updateWarranty(warranty: WarrantyreportsModel){
    return this.httpClient.put(`${this.apiURL}/warranties/${warranty.id}`, warranty);
  }

  public deleteWarrantyReports(id: number){
    return this.httpClient.delete(`${this.apiURL}/warranties/${id}`);
  }

  public getImgData(){
    return this.httpClient.get<ImageModel[]>(`${this.apiURL}/images`);
  }
  public addImgData(img: ImageModel){
    return this.httpClient.post(`${this.apiURL}/images`, img);
  }
  public deleteImgData(id: number){
    return this.httpClient.delete(`${this.apiURL}/images/${id}`);
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

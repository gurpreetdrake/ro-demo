import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WarrantyreportsModel } from '../Model/warrantyreports';
import { DocumentModel } from '../Model/documentmodel';
import { VideoModel } from '../Model/videomodel';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://shielded-sands-78532.herokuapp.com'
  constructor(private httpClient: HttpClient) {

  }

  getHttpOptions() {
    let token = localStorage.getItem("id_token");
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  }

  login(email: string, password: string) {
    this.httpClient.post(`${this.apiURL}/auth/local`,
      {
        "identifier": email,
        "password": password
      })
      .subscribe((res) => {
        localStorage.setItem("id_token", res['jwt']);
      });
  }

  public getWarranty() {
    console.log(this.getHttpOptions())
    return this.httpClient.get<WarrantyreportsModel[]>(`${this.apiURL}/warranties`, this.getHttpOptions());
  }
  public addWarranty(warranty: WarrantyreportsModel) {
    return this.httpClient.post(`${this.apiURL}/warranties`, warranty, this.getHttpOptions());
  }
  public updateWarranty(warranty: WarrantyreportsModel) {
    return this.httpClient.put(`${this.apiURL}/warranties/${warranty.id}`, warranty, this.getHttpOptions());
  }
  public deleteWarranty(id: number) {
    return this.httpClient.delete(`${this.apiURL}/warranties/${id}`, this.getHttpOptions());
  }

  public getDocument() {
    return this.httpClient.get<DocumentModel[]>(`${this.apiURL}/documents`, this.getHttpOptions());
  }
  public addDocument(doc: any) {
    return this.httpClient.post(`${this.apiURL}/documents`, doc, this.getHttpOptions());
  }
  public deleteDocument(id: number) {
    return this.httpClient.delete(`${this.apiURL}/documents/${id}`, this.getHttpOptions());
  }

  public getVideo() {
    return this.httpClient.get<VideoModel[]>(`${this.apiURL}/videos`, this.getHttpOptions());
  }
  public addVideo(vid: VideoModel) {
    return this.httpClient.post(`${this.apiURL}/videos`, vid, this.getHttpOptions());
  }
  public deleteVideo(id: number) {
    return this.httpClient.delete(`${this.apiURL}/videos/${id}`, this.getHttpOptions());
  }

  public postFile(fileToUpload: File) {
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.httpClient.post(`${this.apiURL}/upload`, formData,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT",
          'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
          'Content-Type': 'multipart/form-data'
        }
      });
  }
}

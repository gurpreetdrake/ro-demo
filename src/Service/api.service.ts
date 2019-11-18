import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { } from '../productlist/productlist.component'
import { WarrantyreportsModel } from '../Model/warrantyreports';
import { DocumentModel } from '../Model/documentmodel';
import { VideoModel } from '../Model/videomodel';
import { ProductModel } from 'src/Model/product-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://shielded-sands-78532.herokuapp.com'
  constructor(private httpClient: HttpClient) {

  }

  getApiUrl(): string{
    return this.apiURL;
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
// -------------------------------Product---------------------------------------------
    public getProduct() {
    console.log(this.getHttpOptions())
    return this.httpClient.get<ProductModel[]>(`${this.apiURL}/products`, this.getHttpOptions());
  }
  public addProduct(product: ProductModel) {
    return this.httpClient.post(`${this.apiURL}/products`, product, this.getHttpOptions());
  }
  public updateProduct(product: ProductModel) {
    return this.httpClient.put(`${this.apiURL}/products/${product.id}`, product, this.getHttpOptions());
  }
  public deleteProduct(id: number) {
    return this.httpClient.delete(`${this.apiURL}/products/${id}`, this.getHttpOptions());
  }

  // -------------------------------Warranty---------------------------------------------
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
// -------------------------------Document---------------------------------------------
  public getDocument() {
    return this.httpClient.get<DocumentModel[]>(`${this.apiURL}/documents`, this.getHttpOptions());
  }
  public addDocument(doc: any) {
    return this.httpClient.post(`${this.apiURL}/documents`, doc, this.getHttpOptions());
  }
  public deleteDocument(id: number) {
    return this.httpClient.delete(`${this.apiURL}/documents/${id}`, this.getHttpOptions());
  }
// -------------------------------Video---------------------------------------------
  public getVideo() {
    return this.httpClient.get<VideoModel[]>(`${this.apiURL}/videos`, this.getHttpOptions());
  }
  public addVideo(vid: VideoModel) {
    return this.httpClient.post(`${this.apiURL}/videos`, vid, this.getHttpOptions());
  }
  public deleteVideo(id: number) {
    return this.httpClient.delete(`${this.apiURL}/videos/${id}`, this.getHttpOptions());
  }

  public postFile(formData: FormData) {
    return this.httpClient.post(`${this.apiURL}/upload`, formData, this.getHttpOptions());
  }

  public deleteFile(id: number) {
    return this.httpClient.delete(`${this.apiURL}/upload/files/${id}`, this.getHttpOptions());
  }
}

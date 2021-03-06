import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { WarrantyreportsModel } from '../Model/warrantyreports';
import { DocumentModel } from '../Model/documentmodel';
import { VideoModel } from '../Model/videomodel';
import { ProductModel } from '../Model/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'https://rostrapi.herokuapp.com'
  constructor(private httpClient: HttpClient,
    private router: Router) {
    let token = localStorage.getItem("id_token");
    if (token == null) {
      this.login("demo@mail.com", "abc123");
    }
  }

  getApiUrl(): string {
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
        window.location.reload();
      });
  }
  // -------------------------------Product---------------------------------------------
  public getProductById(id: any) {
    return this.httpClient.get<ProductModel[]>(`${this.apiURL}/products/${id}`, this.getHttpOptions());
  }
  public getProduct() {
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
  public getWarrantyById(id: any) {
    return this.httpClient.get<WarrantyreportsModel[]>(`${this.apiURL}/warranties/${id}`, this.getHttpOptions());
  }
  public getWarranty() {
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

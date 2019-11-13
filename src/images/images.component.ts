import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

export interface img {
  src: string;
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})

export class ImagesComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  
  // imgs: img[] = [
  //   {src: '../assets/img/header40.jpg'},
  //   {src: '../assets/img/header40.jpg'},
  //   {src: '../assets/img/header40.jpg'},
  //   {src: '../assets/img/header40.jpg'},
  //   {src: '../assets/img/header40.jpg'},
  //   {src: '../assets/img/header40.jpg'}
  // ];
  ImgData: any;
  fetchRecords(){
    this.apiService.getImgData().subscribe((res)=>{
      console.log("Get Response:"+ res.toString());
      this.ImgData =res;
    })
  }

  deleteRecord(id:number){
    this.apiService.deleteImgData(id).subscribe((res)=>{
      console.log("Delete Response:" + res.toString());
      this.fetchRecords();
    })
  }
  
}

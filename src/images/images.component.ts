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
  
  imgs: img[] = [
    {src: '../assets/img/header40.jpg'},
    {src: 'C:\git\ro-demo\src\assets\img\header40.jpg'},
    {src: 'C:\git\ro-demo\src\assets\img\header40.jpg'},
    {src: 'C:\git\ro-demo\src\assets\img\header40.jpg'},
    {src: 'C:\git\ro-demo\src\assets\img\header40.jpg'},
    {src: 'C:\git\ro-demo\src\assets\img\header40.jpg'}
  ];
}

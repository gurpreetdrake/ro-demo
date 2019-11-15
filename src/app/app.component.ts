import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ROdemo';

  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.login("demo@mail.com", "abc123");
  }
}

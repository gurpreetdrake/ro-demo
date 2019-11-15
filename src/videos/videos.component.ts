import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service'

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  fileToUpload: File = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.apiService.postFile(this.fileToUpload)
    .subscribe((res=>{
      console.log("Post File resp: ", res);
    }));
  }

}

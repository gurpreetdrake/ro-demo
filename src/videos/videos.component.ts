import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { Router } from '@angular/router';
import { VideoModel } from 'src/Model/videomodel';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: any;

  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.apiService.getVideo()
      .subscribe((res) => {
        // console.log("Get video:" + JSON.stringify(res));
        this.videos = res;
      })
  }

  saveVideo(files: FileList) {
    let fileToUpload = files.item(0);
    let video: VideoModel = new VideoModel;
    video.name = fileToUpload.name;
    this.apiService.addVideo(video)
      .subscribe((res => {
        // console.log("Add video resp: ", res);
        let itemId = res['id'];
        const formData: FormData = new FormData();
        formData.append('files', fileToUpload);
        formData.append('ref', 'videos');
        formData.append('refId', itemId);
        formData.append('field', 'source');
        this.apiService.postFile(formData)
          .subscribe(
            data => {
              console.log("Post video resp: ", data);
              this.getVideos();
            },
            error => {
              console.log("Failed to upload file: ", error);
              this.apiService.deleteVideo(itemId)
                .subscribe((res) => {
                  console.log("Delete item resp: ", res);
                });
            }
          )
      }));
  }

  deleteVideo(video: VideoModel) {
    this.apiService.deleteVideo(video.id)
      .subscribe((res) => {
        console.log("Delete video resp: ", res);
        this.getVideos();
        this.apiService.deleteFile(video.source['id'])
          .subscribe((res) => {
            console.log("Delete video file resp: ", res);
          })
      })
  }

  openVideo(filePath: string) {
    let apiUrl = this.apiService.getApiUrl();
    window.open(`${apiUrl}${filePath}`, '_blank');
  };

  getFileUrl(filePath: string){
    return `${this.apiService.getApiUrl()}${filePath}`;
  }

}

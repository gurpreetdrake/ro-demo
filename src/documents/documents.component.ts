import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { DocumentModel } from '../Model/documentmodel';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  fileToUpload: File = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  saveDocument(files: FileList) {
    this.fileToUpload = files.item(0);
    // let doc: DocumentModel = new DocumentModel;
    // doc.source = `/upload/${this.fileToUpload.name}`;
    // this.apiService.addDocument(doc)
    // .subscribe((res=>{
    //   console.log("Add document resp: ", res);
      this.apiService.postFile(this.fileToUpload)
      .subscribe((res)=>{
      console.log("Post document resp: ", res);
      })
    // }));
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { DocumentModel } from '../Model/documentmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documents: any;

  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.apiService.getDocument()
      .subscribe((res) => {
        // console.log("Get documents:" + JSON.stringify(res));
        this.documents = res;
      })
  }

  saveDocument(files: FileList) {
    let fileToUpload = files.item(0);
    let doc: DocumentModel = new DocumentModel;
    doc.name = fileToUpload.name;
    this.apiService.addDocument(doc)
      .subscribe((res => {
        console.log("Add document resp: ", res);
        let itemId = res['id'];
        const formData: FormData = new FormData();
        formData.append('files', fileToUpload);
        formData.append('ref', 'documents');
        formData.append('refId', itemId);
        formData.append('field', 'source');
        this.apiService.postFile(formData)
          .subscribe(
            data => {
              console.log("Post document resp: ", data);
              this.getDocuments();
            },
            error => {
              console.log("Failed to upload file: ", error);
              this.apiService.deleteDocument(itemId)
                .subscribe((res) => {
                  console.log("Delete document resp: ", res);
                });
            }
          )
      }));
  }

  deleteDocument(document: DocumentModel) {
    this.apiService.deleteDocument(document.id)
      .subscribe((res) => {
        console.log("Delete document resp: ", res);
        this.getDocuments();
        this.apiService.deleteFile(document.source['id'])
          .subscribe((res) => {
            console.log("Delete document file resp: ", res);
          })
      })
  }

  openDocument(filePath: string) {
    let apiUrl = this.apiService.getApiUrl();
    window.open(`${apiUrl}${filePath}`, '_blank');
  };

}

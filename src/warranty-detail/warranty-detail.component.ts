import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-warranty-detail',
  templateUrl: './warranty-detail.component.html',
  styleUrls: ['./warranty-detail.component.css']
})
export class WarrantyDetailComponent implements OnInit {

  item: any;
  it: any;
  constructor(private apiService: ApiService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(param => {
       this.fetchData(param['id'])
      });
  }
  fetchData(id:string){
    this.apiService.getWarrantyById(id)
    .subscribe((res)=>{      
      this.item = res;
    })
  }
  onPrint() {
    const printContent = document.getElementById("report");
    const WindowPrt = window.open('', '', 'left=0,top=0,width=700,height=700,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);    
    WindowPrt.document.write(' <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" >')
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    }
}

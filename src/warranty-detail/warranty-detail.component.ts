import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WarrantyreportComponent } from 'src/warrantyreport/warrantyreport.component';

@Component({
  selector: 'app-warranty-detail',
  templateUrl: './warranty-detail.component.html',
  styleUrls: ['./warranty-detail.component.css']
})
export class WarrantyDetailComponent implements OnInit {

  item: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.item = params;
      });
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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    const WindowPrt = window.open('', '', 'left=0,top=15,width=700,height=700,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    }
}

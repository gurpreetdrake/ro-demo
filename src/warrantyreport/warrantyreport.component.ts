import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'warrantyreport',
  templateUrl: './warrantyreport.component.html',
  styleUrls: ['./warrantyreport.component.css']
})


export class WarrantyreportComponent implements OnInit {

  loadingData: Boolean = false;
  displayedColumns: string[] = ['serialNo', 'deliveryDate', 'customer', "nsn", 'value', 'warrantyTill', 'partNo', 'location', 'designation', 'type', 'warrantyPeriod', 'action1', 'action2','action3'];
  warrantyData: any = [];

  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.fetchRecords();
  }

  fetchRecords() {
    this.loadingData = true;
    this.apiService.getWarranty()
      .subscribe(
        (data) => {
          // console.log("Get Response:" + data.toString());
          this.loadingData = false;
          this.warrantyData = data;
        },
        (error) => {
          this.loadingData = false;
        }
      )
  }

  deleteRecord(id: number) {
    this.apiService.deleteWarranty(id)
      .subscribe((res) => {
        console.log("Delete Response:" + res.toString());
        this.fetchRecords();
      })
  }

}

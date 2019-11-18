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
  displayedColumns: string[] = ['serialNo', 'deliveryDate', 'customer', "nsn", 'value', 'warrantyTill', 'partNo','location','designation','type','warrantyPeriod', 'action1', 'action2'];
  warrantyData: any;

  constructor(private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.loadingData = true;
    this.fetchRecords();
  }

  fetchRecords(){
    this.apiService.getWarranty()
    .subscribe((res)=>{      
      console.log("Get Response:" + res.toString());
      this.loadingData = false;
      this.warrantyData = res;
    })
  }

  deleteRecord(id: number){
    this.apiService.deleteWarranty(id)
    .subscribe((res)=>{
      console.log("Delete Response:" + res.toString());
      this.fetchRecords();
    })
  }

}

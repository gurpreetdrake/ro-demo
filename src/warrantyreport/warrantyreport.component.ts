import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { WarrantyreportsModel } from '../Model/warrantyreports';

@Component({
  selector: 'warrantyreport',
  templateUrl: './warrantyreport.component.html',
  styleUrls: ['./warrantyreport.component.css']
})


export class WarrantyreportComponent implements OnInit {

  displayedColumns: string[] = ['serialNo', 'deliveryDate', 'customer', "nsn", 'value', 'warrantyTill', 'partNo','location','designation','type','warrantyPeriod', 'action1', 'action2'];
  warrantyData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchRecords();
  }

  fetchRecords(){
    this.apiService.getWarrantyReports().subscribe((res)=>{      
      console.log("Get Response:" + res.toString());
      this.warrantyData = res;
    })
  }

  deleteRecord(id: number){
    this.apiService.deleteWarrantyReports(id).subscribe((res)=>{
      console.log("Delete Response:" + res.toString());
      this.fetchRecords();
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { Warrantyreports } from '../Model/warrantyreports';

@Component({
  selector: 'warrantyreport',
  templateUrl: './warrantyreport.component.html',
  styleUrls: ['./warrantyreport.component.css']
})


export class WarrantyreportComponent implements OnInit {

  displayedColumns: string[] = ['serialNo', 'deliveryDate', 'customer'];
  warrantyData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getWarrantyReports().subscribe((res)=>{      
        console.log("Response:" + res.toString());
        this.warrantyData = res;
    })
  }

}

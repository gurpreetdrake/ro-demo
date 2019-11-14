import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ApiService } from '../Service/api.service';
import { WarrantyreportsModel } from '../Model/warrantyreports';

@Component({
  selector: 'app-add-warranty',
  templateUrl: './add-warranty.component.html',
  styleUrls: ['./add-warranty.component.css']
})

export class AddWarrantyComponent implements OnInit {

  newRecord: WarrantyreportsModel;

  constructor(private apiService: ApiService,
              private location: Location) { }

  ngOnInit() {
    this.newRecord = new WarrantyreportsModel;
    this.newRecord.serialNo = 1234;
    this.newRecord.deliveryDate = new Date().toISOString().substring(0, 10);
    this.newRecord.customer = "Customer";
    this.newRecord.nsn = "7734-07-467-0456";
    this.newRecord.designation = "TEST SET UPGRADE";
    this.newRecord.partNo = 16332395;
    this.newRecord.value = 348;
    this.newRecord.warrantyPeriod = 5;
    this.newRecord.warrantyTill = "2020-05-15 00:00:00";
    this.newRecord.type = "KIT";
    this.newRecord.location = "Production";
  } 

  saveRecord(){
    this.apiService.addWarranty(this.newRecord).subscribe((res)=>{  
      console.log("Add Response:" + res.toString());
      this.location.back();
  })
  }

}

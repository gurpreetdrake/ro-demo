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
  productData:any;
  selectedProductIndex:number=0;

  constructor(private apiService: ApiService,
              private location: Location) { }

  ngOnInit() {
    this.fetchProducts();
    this.newRecord = new WarrantyreportsModel;
    this.newRecord.serialNo = 1234;
    this.newRecord.deliveryDate = new Date().toISOString().substring(0, 10);
    this.newRecord.customer = "Customer";
    this.newRecord.warrantyTill = "2020-05-15 00:00:00";
    this.newRecord.location = "Production";
  } 

  saveRecord(){
    this.newRecord.product = this.productData[this.selectedProductIndex];
    this.apiService.addWarranty(this.newRecord)
    .subscribe((res)=>{  
      console.log("Add Response:" + res.toString());
      this.location.back();
  })
  }
  
  fetchProducts(){
    this.apiService.getProduct().subscribe((res)=>{      
      console.log("Get Response:" + res.toString());      
      this.productData = res;
    })
  }

}

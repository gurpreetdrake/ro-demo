import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../Service/api.service';
import { ProductModel } from '../Model/productmodel';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newRecord: ProductModel;

  constructor(private apiService: ApiService,
              private location: Location) { }

  ngOnInit() {
    this.newRecord = new ProductModel;
    this.newRecord.partNo = '16332395';
    this.newRecord.designation = "TEST SET UPGRADE";
    this.newRecord.nsn = "7734-07-467-0456";
    this.newRecord.value = 348;
    this.newRecord.warrantyPeriod = 5;
    this.newRecord.type = "KIT";
  } 
  saveRecord(){
    this.apiService.addProduct(this.newRecord)
    .subscribe((res)=>{  
      console.log("Add Response:" + res.toString());
      this.location.back();
  })
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../Service/api.service';
import { WarrantyreportsModel } from '../../Model/warrantyreports';

@Component({
  selector: 'app-add-warranty',
  templateUrl: './add-warranty.component.html',
  styleUrls: ['./add-warranty.component.css']
})
export class AddWarrantyComponent implements OnInit {

  newRecord: WarrantyreportsModel;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.newRecord = new WarrantyreportsModel;
    this.newRecord.serialNo = 0;
    this.newRecord.deliveryDate = Date.now.toString();
    this.newRecord.customer = "";
  }

  saveRecord(){
    console.log("serialNo: " + this.newRecord.serialNo);  
    console.log("deliveryDate: " + this.newRecord.deliveryDate);  
    console.log("customer: " + this.newRecord.customer);  
    this.apiService.addWarranty(this.newRecord).subscribe((res)=>{  
      console.log("Add Response:" + res.toString());
  })
  }

}

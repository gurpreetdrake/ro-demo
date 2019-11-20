import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../Service/api.service';
import { WarrantyreportsModel } from '../Model/warrantyreports';

@Component({
  selector: 'app-edit-warranty',
  templateUrl: './edit-warranty.component.html',
  styleUrls: ['./edit-warranty.component.css']
})
export class EditWarrantyComponent implements OnInit {

  item:any;
  productData:any;
  selectedProductIndex:number=0;
  constructor(private apiService: ApiService, 
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(param => {
       this.fetchData(param['id'])
      });
  }

  fetchData(id:string){
    this.apiService.getWarrantyById(id)
    .subscribe((res)=>{      
      this.item = res;
    })
    this.apiService.getProduct().subscribe((productResp)=>{     
      this.productData = productResp;
    })
  }
  
  updateRecord(data: WarrantyreportsModel){
    data.product = this.productData[this.selectedProductIndex];
    this.apiService.updateWarranty(data)
    .subscribe((res)=>{  
      console.log("Upadte Response:" + res.toString());
      this.location.back();
  })
  }
}

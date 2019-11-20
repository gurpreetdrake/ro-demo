import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../Service/api.service';
import { ProductModel } from '../Model/productmodel';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  item:any;
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
    this.apiService.getProductById(id)
    .subscribe((res)=>{      
      this.item = res;
    })    
  }

  updateRecord(data: ProductModel){
    this.apiService.updateProduct(data)
    .subscribe((res)=>{
        this.location.back();
  })
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  loadingData: Boolean = false;
  displayedColumns: string[] = ['partNo','designation','nsn', 'value', 'warrantyPeriod', 'type', 'action1'];
  productData: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadingData = true;
    this.fetchRecords();
  }

  fetchRecords(){
    this.apiService.getProduct().subscribe((res)=>{      
      console.log("Get Response:" + res.toString());
      this.loadingData = false;
      this.productData = res;
    })
  }

  deleteRecord(id: number){
    this.apiService.deleteProduct(id).subscribe((res)=>{
      console.log("Delete Response:" + res.toString());
      this.fetchRecords();
    })
  }

}
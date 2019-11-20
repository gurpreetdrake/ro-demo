import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  loadingData: Boolean = false;
  displayedColumns: string[] = ['partNo', 'designation', 'nsn', 'value', 'warrantyPeriod', 'type', 'action1', 'action2'];
  productData: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchRecords();
  }

  fetchRecords() {
    this.loadingData = true;
    this.apiService.getProduct()
      .subscribe(
        (data) => {
          // console.log("Get Response:" + data.toString());
          this.loadingData = false;
          this.productData = data;
        },
        (error) => {
          this.loadingData = false;
        }
      )
  }

  deleteRecord(id: number) {
    this.apiService.deleteProduct(id).subscribe((res) => {
      console.log("Delete Response:" + res.toString());
      this.fetchRecords();
    })
  }

}
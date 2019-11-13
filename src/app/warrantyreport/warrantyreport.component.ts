import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service'

@Component({
  selector: 'warrantyreport',
  templateUrl: './warrantyreport.component.html',
  styleUrls: ['./warrantyreport.component.css']
})
export class WarrantyreportComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getWarrantyReports().subscribe((res)=>{      
        console.log("Response:" + res);
    })
  }
}

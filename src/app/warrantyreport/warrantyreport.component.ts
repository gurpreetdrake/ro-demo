import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'warrantyreport',
  templateUrl: './warrantyreport.component.html',
  styleUrls: ['./warrantyreport.component.css']
})


export class WarrantyreportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['serialNo', 'deliveryDate', 'customer'];

  dataSource = [
    {serialNo: 1234, deliveryDate: '2019-11-05T00:00:00.000Z', customer: 'Customer1'},
    {serialNo: 1235, deliveryDate: '2019-10-05T00:00:00.000Z', customer: 'Customer2'},
    {serialNo: 1238, deliveryDate: '2019-11-05T00:00:00.000Z', customer: 'Customer3'},
  ];
}

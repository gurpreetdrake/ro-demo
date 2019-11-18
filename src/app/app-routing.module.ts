import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WarrantyreportComponent } from '../warrantyreport/warrantyreport.component';
import { AddWarrantyComponent } from '../add-warranty/add-warranty.component';
import { VideosComponent } from '../videos/videos.component';
import { DocumentsComponent } from '../documents/documents.component';
import { WarrantyDetailComponent } from '../warranty-detail/warranty-detail.component';
import { ProductComponent } from '../product/product.component'

import { AddProductComponent } from '../add-product/add-product.component';

const routes: Routes = [{path:'', component: HomeComponent},
                        {path:'warrantyreports', component: WarrantyreportComponent},
                        {path:'add-warranty', component: AddWarrantyComponent},
                        {path:'vids', component: VideosComponent},
                        {path:'docs', component: DocumentsComponent},
                        {path:'warranty-detail', component: WarrantyDetailComponent},
                        {path:'products', component: ProductComponent},
                        {path:'add-product', component: AddProductComponent},
                        {path:'', redirectTo: '', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

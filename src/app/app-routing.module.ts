import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { WarrantyreportComponent } from '../warrantyreport/warrantyreport.component';
import { AddWarrantyComponent } from '../add-warranty/add-warranty.component';
import { VideosComponent } from '../videos/videos.component';
import { DocumentsComponent } from '../documents/documents.component';
import { WarrantyDetailComponent } from './warranty-detail/warranty-detail.component';


const routes: Routes = [{path:'home', component: HomeComponent},
                        {path:'warrantyreports', component: WarrantyreportComponent},
                        {path:'add-warranty', component: AddWarrantyComponent},
                        {path:'videos', component: VideosComponent},
                        {path:'documents', component: DocumentsComponent},
                        {path:'warranty-detail', component: WarrantyDetailComponent},
                        {path:'', redirectTo: '/home', pathMatch:'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

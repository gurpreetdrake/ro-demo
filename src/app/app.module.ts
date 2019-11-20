import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from '../Service/api.service'
import { WarrantyreportComponent } from '../warrantyreport/warrantyreport.component';
import { AddWarrantyComponent } from '../add-warranty/add-warranty.component';
import { VideosComponent } from '../videos/videos.component';
import { DocumentsComponent } from '../documents/documents.component';
import { WarrantyDetailComponent } from '../warranty-detail/warranty-detail.component';
import { ProductComponent } from '../product/product.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { EditWarrantyComponent } from '../edit-warranty/edit-warranty.component';
import { EditProductComponent } from '../edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    WarrantyreportComponent,
    AddWarrantyComponent,
    VideosComponent,
    DocumentsComponent,
    WarrantyDetailComponent,
    ProductComponent,
    AddProductComponent,
    EditWarrantyComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

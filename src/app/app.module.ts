import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NchildComponent } from './nchild/nchild.component';
import { ProductsComponent } from './products/products.component';
import { LayoutComponent } from './layout/layout.component';
import { FlipkartprodComponent } from './flipkartprod/flipkartprod.component';
import { PostComponent } from './shared/post/post.component';
import { TableComponent } from './shared/table/table.component';
import { FormsModule } from '@angular/forms';
import { StdTableComponent } from './shared/std-table/std-table.component';
import { StdFormComponent } from './shared/std-form/std-form.component';
import { FormTempRefComponent } from './shared/form-temp-ref/form-temp-ref.component';
import { TableTempRefComponent } from './shared/table-temp-ref/table-temp-ref.component';
import { TableViewChComponent } from './shared/table-view-ch/table-view-ch.component';
import { FormmViewChComponent } from './shared/formm-view-ch/formm-view-ch.component';



@NgModule({
  declarations: [
    AppComponent,
    NchildComponent,
    ProductsComponent,
    LayoutComponent,
    FlipkartprodComponent,
    PostComponent,
    TableComponent,
    StdTableComponent,
    StdFormComponent,
    FormTempRefComponent,

    TableTempRefComponent,

    TableViewChComponent,
     FormmViewChComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

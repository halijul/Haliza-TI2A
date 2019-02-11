import { BiodataService } from './service/biodata.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiodataComponent } from './component/biodata/biodata.component';

@NgModule({
  declarations: [
    AppComponent,
    BiodataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BiodataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

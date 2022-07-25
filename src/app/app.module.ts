import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { BubblechartComponent } from './bubblechart/bubblechart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, NgChartsModule, AppRoutingModule],
  declarations: [AppComponent, BubblechartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

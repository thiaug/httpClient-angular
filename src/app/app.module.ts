import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './root/root.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [ CommonModule, BrowserModule, HttpClientModule ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
  providers: []
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent, DisplayComponent, PreviewComponent } from './counter/counter.component';


export const routes: Routes = [
  {path:'counter', component: CounterComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    DisplayComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

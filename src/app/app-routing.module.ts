import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BubblechartComponent } from './bubblechart/bubblechart.component';

const routes: Routes = [
  { path: 'BubblechartComponent', component: BubblechartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

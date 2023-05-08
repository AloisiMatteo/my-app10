import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoriComponent } from './autori/autori.component';

const routes: Routes = [
  { path: 'autori', component: AutoriComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

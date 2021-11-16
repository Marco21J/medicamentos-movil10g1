import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaisEditPage } from './pais-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PaisEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisEditPageRoutingModule {}

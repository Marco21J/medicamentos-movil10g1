import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaisEditPageRoutingModule } from './pais-edit-routing.module';

import { PaisEditPage } from './pais-edit.page';
import { PaiscomponentsModule } from '../components/paiscomponents.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaisEditPageRoutingModule,
    PaiscomponentsModule
  ],
  declarations: [PaisEditPage]
})
export class PaisEditPageModule {}

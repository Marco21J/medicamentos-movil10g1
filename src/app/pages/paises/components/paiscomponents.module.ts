import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisformComponent } from './paisform/paisform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PaisformComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [PaisformComponent]
})
export class PaiscomponentsModule { }

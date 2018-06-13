import { KeyboardProvinceModule, KeyboardStringModule } from 'iwe7-keyboard';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CarPlateComponent } from './car-plate/car-plate';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    KeyboardProvinceModule,
    KeyboardStringModule
  ],
  declarations: [
    CarPlateComponent
  ],
  exports: [
    CarPlateComponent
  ]
})
export class Iwe7CarPlateModule { }

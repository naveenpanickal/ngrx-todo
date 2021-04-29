import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';




const material = [
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  imports: [
    material
  ],
  exports: [material]
})
export class MaterialModule { }

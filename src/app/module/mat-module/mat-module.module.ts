import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule
    ],
    exports:[
      MatFormField,
      MatIconModule,
      MatTabsModule
    ]
})
export class MatModuleModule { }

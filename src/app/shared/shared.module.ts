import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PoModule } from '@portinari/portinari-ui';
import { PoTemplatesModule } from '@portinari/portinari-templates';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PoModule,
    PoTemplatesModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    PoModule,
    PoTemplatesModule
  ]
})
export class SharedModule { }

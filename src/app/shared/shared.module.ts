import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ThfModule } from '@totvs/thf-ui';
import { ThfTemplatesModule } from '@totvs/thf-templates';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThfModule,
    ThfTemplatesModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ThfModule,
    ThfTemplatesModule
  ]
})
export class SharedModule { }

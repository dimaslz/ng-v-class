import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodePresentationComponent } from './code-presentation.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [CodePresentationComponent],
  imports: [CommonModule, PipesModule],
  exports: [CodePresentationComponent],
  bootstrap: [],
})
export class CodePresentationModule {}

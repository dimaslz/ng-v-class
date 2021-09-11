import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgHeroiconsModule } from '@dimaslz/ng-heroicons';
import { NgVClassModule } from 'projects/ng-v-class/src/public-api';

import { AppComponent } from './app.component';
import { DarkModeModule } from '../components/darkmode-toggle/darkmode-toggle.module';
import { IconModule } from '../components/icon/icon.module';
import { PipesModule } from '../pipes/pipes.module';
import { CodePresentationModule } from '../components/code-presentation/code-presentation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgVClassModule,
    NgHeroiconsModule,
    IconModule,
    DarkModeModule,
    PipesModule,
    CodePresentationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

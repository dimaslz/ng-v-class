export const template = `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgVClassModule } from '@dimaslz/ng-v-class';
// or: import NgVClassModule from '@dimaslz/ng-v-class';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgVClassModule,
		// ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

export default template;
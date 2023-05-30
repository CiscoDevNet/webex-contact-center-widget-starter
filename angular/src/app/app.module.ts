import { Injector, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCustomComponent } from './my-custom-component/my-custom-component.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [AppComponent, MyCustomComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [MyCustomComponent],
  // allows custom elements to be used inside angular projects
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const injector = this.injector;
    // Convert 'MyCustomComponent' to a custom element
    const customElement = createCustomElement(MyCustomComponent, {
      injector,
    });
    // Register the custom element with the browser
    customElements.define('wxcc-angular-starter-widget', customElement);
  }
}

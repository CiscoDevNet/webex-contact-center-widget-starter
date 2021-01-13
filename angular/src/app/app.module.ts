import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyCustomComponentComponent } from './my-custom-component/my-custom-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCustomComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


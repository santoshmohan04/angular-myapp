import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ServerComponent } from './server/server.component';
import { ProductsComponent } from './products/products.component';
import { WarningalertComponent } from './Warningalert/Warningalert.component';
import { SuccessAlertComponent } from './SuccessAlert/successalert.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ServerComponent,
    ProductsComponent,
    WarningalertComponent,
    SuccessAlertComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

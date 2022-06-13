import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { HeaderHomeComponent } from './header-home/header-home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuFooterComponent,
    HeaderHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

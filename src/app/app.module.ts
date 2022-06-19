import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { SearchHomeComponent } from './search-home/search-home.component';
import { Section1HomeComponent } from './section1-home/section1-home.component';
import { Section2HomeComponent } from './section2-home/section2-home.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    MenuFooterComponent,
    HeaderHomeComponent,
    SearchHomeComponent,
    Section1HomeComponent,
    Section2HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DummyComponent } from './dummy/dummy.component';
import { SitesComponent } from './sites/sites.component';
import { BlocksComponent } from './blocks/blocks.component';
import { FloorsComponent } from './floors/floors.component';
import { FlatsComponent } from './flats/flats.component';
import { InvoiceService } from './invoice.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    SitesComponent,
    BlocksComponent,
    FloorsComponent,
    FlatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

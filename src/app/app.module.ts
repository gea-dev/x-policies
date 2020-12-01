import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TabComponent } from './components/tab/tab.component';
import { OverviewComponent } from './components/tab-items/overview/overview.component';
import { PrivacyPolicyComponent } from './components/tab-items/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TabComponent,
    OverviewComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

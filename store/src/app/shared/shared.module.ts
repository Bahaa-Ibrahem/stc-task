import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AlertComponent } from './components/alert/alert.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HandelErrorInterceptor } from './interceptors/handel-error.interceptor';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { HttpLoaderFactory } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from './modules/material.module';
import { InternationalizationModule } from '../internationalization/internationalization.module';
import { PlaceholderDirective } from './direcctives/placeholder.directive';


@NgModule({
  declarations: [
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    SharedRoutingModule,
    InternationalizationModule.forRoot({ locale_id: 'en-US' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: "toast-bottom-right"
    }),
    MaterialModule
  ],
  exports: [
    AlertComponent,
    InternationalizationModule,
    TranslateModule,
    ToastrModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    PlaceholderDirective
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HandelErrorInterceptor,
    multi: true
  }]
})
export class SharedModule { }

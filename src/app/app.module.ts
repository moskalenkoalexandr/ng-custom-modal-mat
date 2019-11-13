import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from './_modal';
import { appRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { TestPageComponent } from './test-page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ModalModule,
        appRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,MatButtonModule,MatInputModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TestPageComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
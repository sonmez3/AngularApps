import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './pages/example/example.component';
import { Example2Component } from './pages/example2/example2.component';
import { EventclickComponent } from './pages/eventclick/eventclick.component';
import { DatapassInputComponent } from './pages/datapass-input/datapass-input.component';
import { TwoWayBindingComponent } from './pages/two-way-binding/two-way-binding.component';
import { NgOnchangeHookComponent } from './pages/ng-onchange-hook/ng-onchange-hook.component';
import { NgforComponent } from './directives/ngfor/ngfor.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgSwitchComponent } from './directives/ng-switch/ng-switch.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgModelComponent } from './directives/ng-model/ng-model.component';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { UpperPipe } from './pipes/upper.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    Example2Component,
    EventclickComponent,
    DatapassInputComponent,
    TwoWayBindingComponent,
    NgOnchangeHookComponent,
    NgforComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
    PipeComponent,
    UpperPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

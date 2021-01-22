import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { RouterModule } from '@angular/router';
import { MonitorComponent } from './monitor/monitor.component';
import { MonitorFormComponent } from './monitor-form/monitor-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MonitorComponent,
    MonitorFormComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    PoTemplatesModule,
    RouterModule.forRoot([
      { path: ' ', component: MonitorComponent },
      { path: 'monitor', component: MonitorComponent },
      { path: 'new', component: MonitorFormComponent },
      //{ path: 'view/:id', component: MonitorViewComponent },
      { path: 'edit/:id', component: MonitorFormComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';
import { MonitorService } from '../monitor/monitor.service';

@Component({
  selector: 'app-monitor-form',
  templateUrl: './monitor-form.component.html',
  styleUrls: ['./monitor-form.component.css']
})
export class MonitorFormComponent implements OnInit {

  // PLEASE ADD THE API URL SERVICE HERE
  readonly apiService = 'http://localhost:8051/api/rh/esocial/v1/esocialMonitor/eventos';

  private _monitorService: MonitorService;   

  public readonly actions: PoPageDynamicEditActions = {
    save: ' ',
    saveNew: 'new',
    cancel: ' '
  };

  fields: Array<PoPageDynamicEditField> = null;

  constructor(private monitorService: MonitorService){
    this._monitorService = monitorService;       
  } 

  ngOnInit() { 
    this._monitorService.getCamposVisao().subscribe({
        next: campos => {
          this.fields = campos          
      },            
        error: erro => console.error(erro)
      });    
  }

}

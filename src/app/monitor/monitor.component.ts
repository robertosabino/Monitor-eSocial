import { Component, OnInit } from '@angular/core';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoPageDynamicTableActions } from '@po-ui/ng-templates';
import { MonitorService } from './monitor.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  // PLEASE ADD THE API URL SERVICE HERE
  readonly apiService = 'http://localhost:8051/api/rh/esocial/v1/esocialMonitor/eventos';

  public readonly actions: PoPageDynamicTableActions = {
    detail: 'view/:id',
    duplicate: 'new',
    edit: 'edit/:id',
    new: 'new',
    remove: true,
    removeAll: true
  };

  fields: Array<any> = null; 

  private _monitorService: MonitorService;   

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

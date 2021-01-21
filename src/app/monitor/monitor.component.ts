import { Component, OnInit } from '@angular/core';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoPageDynamicTableActions } from '@po-ui/ng-templates';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  // PLEASE ADD THE API URL SERVICE HERE
  readonly apiService = 'https://app-demo-portinari-api.herokuapp.com/api/samples/v1/people';

  public readonly actions: PoPageDynamicTableActions = {
    detail: 'template-customers/view/:id',
    duplicate: 'template-customers/new',
    edit: 'template-customers/edit/:id',
    new: 'template-customers/new',
    remove: true,
    removeAll: true
  };

  public readonly fields: Array<any> = [
    { property: 'id', visible: false, key: true },
    { property: 'name', label: 'Nome', filter: true, gridColumns: 6 },
    { property: 'nickname', label: 'Apelido' },    
    { property: 'birthdate', label: 'Nascimento', type: 'date', format: 'dd/MM/yyyy', width: '100px' },    
    { property: 'genre', label: 'Gênero', type: 'subtitle', width: '80px', filter: true, gridColumns: 7,
      options: [
        { value: 'female', label: 'Feminino' },
        { value: 'male', label: 'Masculino' },
        { value: 'other', label: 'Outros' },
      ],
      subtitles: [
        { value: 'female', color: 'color-05', content: 'F', label: 'Feminino' },
        { value: 'male', color: 'color-02', content: 'M', label: 'Masculino' },
        { value: 'other', color: 'color-08', content: 'O', label: 'Outros' },
      ]
    },
    { property: 'status', type: 'label', optionsMulti: true, filter: true, gridColumns: 5,
      options: [
        { value: 'active', label: 'Ativo' },
        { value: 'inactive', label: 'Inativo' }
      ],
      labels: [
        { value: 'active', color: 'color-10', label: 'Ativo' },
        { value: 'inactive', color: 'color-07', label: 'Inativo' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() { }

}

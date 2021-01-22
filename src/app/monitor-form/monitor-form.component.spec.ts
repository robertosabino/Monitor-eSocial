import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PoPageDynamicEditModule } from '@po-ui/ng-templates';

import { MonitorFormComponent } from './monitor-form.component';

describe('MonitorFormComponent', () => {
  let component: MonitorFormComponent;
  let fixture: ComponentFixture<MonitorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PoPageDynamicEditModule
      ],
      declarations: [ MonitorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

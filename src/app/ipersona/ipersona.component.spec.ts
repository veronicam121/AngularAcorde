import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpersonaComponent } from './ipersona.component';

describe('IpersonaComponent', () => {
  let component: IpersonaComponent;
  let fixture: ComponentFixture<IpersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

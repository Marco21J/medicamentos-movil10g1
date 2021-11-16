import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaisesPage } from './paises.page';
import { PaisService } from '../services/pais.service';
import { AlertService } from '../../../shared/services/alert.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PaisesPage', () => {
  let component: PaisesPage;
  let fixture: ComponentFixture<PaisesPage>;

  const routerSpy = jasmine.createSpyObj(
    'Router',
    ['navigateByUrl']
  );

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [PaisService, AlertService, { provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(PaisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

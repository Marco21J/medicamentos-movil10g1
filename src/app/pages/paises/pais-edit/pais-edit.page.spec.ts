import { ComponentFixture, inject, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaisEditPage } from './pais-edit.page';
import { PaiscomponentsModule } from '../components/paiscomponents.module';
import { ActivatedRoute, Router, convertToParamMap } from '@angular/router';
import { PaisService } from '../services/pais.service';
import { AlertService } from '../../../shared/services/alert.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

export class PaisServiceMock {
  public getPais = {
    subscribe: () => {
    }
  };
}

describe('PaisEditPage', () => {
  let component: PaisEditPage;
  let fixture: ComponentFixture<PaisEditPage>;
  const fakeActivatedRoute = {
    snapshot: {
      paramMap: convertToParamMap({
        id: 1,
      }),
      queryParamMap: of(
        convertToParamMap({
          id: 1,
        }),
      )
    },
  };

  const routerSpy = jasmine.createSpyObj(
    'Router',
    ['navigateByUrl']
  );

  const paisService = jasmine.createSpy('PaisService');
  const mockSomeService = {
    getPais: (id: string) => ({
      subscribe: () => ({
        id: 1,
        nombre: 'México',
        descripcion: null,
      })
    })
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisEditPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes([]), HttpClientTestingModule, PaiscomponentsModule],
      providers: [
        AlertService,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PaisEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // eslint-disable-next-line @typescript-eslint/no-shadow
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

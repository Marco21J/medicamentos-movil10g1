import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaisPage } from './pais.page';
import { RouterTestingModule } from '@angular/router/testing';
import { PaiscomponentsModule } from '../components/paiscomponents.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';

describe('PaisPage', () => {
  let component: PaisPage;
  let fixture: ComponentFixture<PaisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule.withRoutes([]), PaiscomponentsModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

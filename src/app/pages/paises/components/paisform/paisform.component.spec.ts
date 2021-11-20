import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaisformComponent } from './paisform.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaisService } from '../../services/pais.service';
import { AlertService } from '../../../../shared/services/alert.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PaisformComponent', () => {
  let component: PaisformComponent;
  let fixture: ComponentFixture<PaisformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisformComponent ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, ReactiveFormsModule],
      providers: [PaisService, AlertService, FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(PaisformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario debe ser inválido (true) - (Requerido)', () => {
    const nombre = component.form.get('nombre');
    nombre.setValue('');
    expect(component.form.invalid).toBeTrue();
  });

  it('El formulario debe ser inválido (true) - (Solo letras)', () => {
    const nombre = component.form.get('nombre');
    const descripcion = component.form.get('descripcion');
    nombre.setValue('1234567890');
    descripcion.setValue('abcd1.2{}[[[]].....---_');
    expect(component.form.invalid).toBeTrue();
  });

  it('El formulario debe ser inválido (true) - (Más de 1 Espacio en blanco)', () => {
    const nombre = component.form.get('nombre');
    const descripcion = component.form.get('descripcion');
    nombre.setValue('mmmmmmmm     mmmmm    mmm  ');
    descripcion.setValue('skeler alv  l  v');
    expect(component.form.invalid).toBeTrue();
  });

  it('El formulario debe ser inválido (true) - (SqlInjection)', () => {
    const nombre = component.form.get('nombre');
    const descripcion = component.form.get('descripcion');
    nombre.setValue('create table');
    descripcion.setValue('insert into');
    expect(component.form.invalid).toBeTrue();
  });
});

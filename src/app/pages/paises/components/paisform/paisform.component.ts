import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { AlertService } from '../../../../shared/services/alert.service';
import { IPaisRead, IPaisRequest } from '../../models/interfaces/pais.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CustomValidation } from '../../../../common/helpers/security/validations/custom-validations';

@Component({
  selector: 'app-paisform',
  templateUrl: './paisform.component.html',
  styleUrls: ['./paisform.component.scss'],
})
export class PaisformComponent implements OnInit, OnDestroy {

  @Input() pais: IPaisRead;
  public form: FormGroup;
  public isEditForm = false;
  private subscription$: Subscription = new Subscription();

  constructor(
    private paisService: PaisService, private alerService: AlertService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    if (this.pais) {
      this.isEditForm = true;
      this.setValues(this.pais.nombre, (this.pais.descripcion) ? this.pais.descripcion : '');
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  //#region Form Controls getters

  public get isNombreValid(): boolean {
    const nombreControl = this.form.get('nombre');
    return nombreControl.invalid && nombreControl.dirty;
  }

  public get isDescripcionValid(): boolean {
    const descControl = this.form.get('descripcion');
    return descControl.invalid && descControl.dirty;
  }

  public getErrorMessage(formControlName: string): string {
    const formControl = this.form.get(formControlName);
    let errorMessage = '';
    const formControlErrors = formControl.errors;
    if (formControlErrors) {
      const errors = Object.keys(formControl.errors);
      switch (errors[0]) {
        case 'required':
          errorMessage = 'Este campo es requerido.';
          break;
        case 'minlength':
          errorMessage = `Este campo debe contener al menos ${formControlErrors.minlength.requiredLength} caracteres.`;
          break;
        case 'maxlength':
          errorMessage = `Este campo no puede tener más de ${formControlErrors.minlength.requiredLength} caracteres.`;
          break;
        case 'onlyLetters':
          errorMessage = `Este campo solo acepta letras.`;
          break;
        case 'twoBlanks':
          errorMessage = `Este campo no puede tener más de 2 espacios en blanco.`;
          break;
        case 'sqlSintax':
          errorMessage = `Este campo tiene un conjunto de caracteres no permitidos.`;
          break;
        default:
          errorMessage = '';
          break;
      }
    }
    return errorMessage;
  }

  //#endregion

  public onSubmit(): void {
    if (this.form.valid) {
      if (this.isEditForm) {
        this.editPais();
      } else {
        this.newPais();
      }
    } else {
      this.alerService.showAlert('Error', 'Los datos no son válidos.');
    }
  }

  private async newPais(): Promise<void> {
    await this.alerService.showLoading('Registrando, espere...');
    const paisDTO = this.getPaisObject();
    this.subscription$.add(this.paisService.newPais(paisDTO).subscribe(data => {
      this.alerService.dismissLoading();
      this.alerService.showAlert('Ok', 'Se registró el país');
      this.setValues();
    }, (e) => {
      this.alerService.dismissLoading();
      this.alerService.showAlert('Ups', 'Hubo un error, intenta más tarde');
    }));
  }

  private async editPais(): Promise<void> {
    await this.alerService.showLoading('Guardando, espere...');
    const paisDTO = this.getPaisObject();
    this.subscription$.add(this.paisService.editPais(paisDTO, `${this.pais.id}`).subscribe(data => {
      this.alerService.dismissLoading();
      this.alerService.showAlert('Ok', 'Se guardó el país');
      this.pais.nombre = data.nombre;
      this.pais.descripcion = (data.descripcion) ? data.descripcion : '';
    }, (e) => {
      this.alerService.dismissLoading();
      this.alerService.showAlert('Ups', 'Hubo un error, intenta más tarde');
    }));
  }

  private getPaisObject(): IPaisRequest {
    const paisDTO: IPaisRequest = {
      nombre: this.form.value.nombre
    };
    const descripcion = this.form.value.descripcion;
    if (descripcion.length > 0) {
      paisDTO.descripcion = descripcion;
    }
    return paisDTO;
  }

  private initForm(): void {
    this.form = this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        CustomValidation.onlyLetters,
        CustomValidation.twoBlanks,
        CustomValidation.sqlInjection
      ]],
      descripcion: ['', [
        Validators.minLength(5),
        Validators.maxLength(200),
        CustomValidation.onlyLetters,
        CustomValidation.twoBlanks,
        CustomValidation.sqlInjection
      ]]
    });
  }

  private setValues(nombre = '', descripcion = ''): void {
    this.form.get('nombre').setValue(nombre);
    this.form.get('descripcion').setValue(descripcion);
  }

}

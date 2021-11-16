import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaisService } from '../services/pais.service';
import { Subscription } from 'rxjs';
import { IPaisRead } from '../models/interfaces/pais.interface';
import { AlertService } from '../../../shared/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.page.html',
  styleUrls: ['./paises.page.scss'],
})
export class PaisesPage implements OnInit, OnDestroy {

  public paises: IPaisRead[] = [];
  private subscription$: Subscription = new Subscription();

  constructor(private paisService: PaisService, private alertService: AlertService, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    this.getPaises();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public addPais(): void {
    this.router.navigateByUrl('/pais');
  }

  public editPais(id: number): void {
    this.router.navigateByUrl(`/pais/${id}`);
  }

  public async deletePais(id: number, index: number): Promise<void> {
    const ok = await this.alertService.presentAlertConfirm('Atención', '¿Eliminar este país? <br> Esta acción no se puede deshacer.');
    if (ok) {
      await this.alertService.showLoading('Eliminando, espere...');
      this.subscription$.add(this.paisService.deletePais(id).subscribe(data => {
        this.alertService.dismissLoading();
        this.alertService.showAlert('Ok', 'Se eliminó el país');
        this.paises.splice(index,1);
      }, (e) => {
        this.alertService.dismissLoading();
        this.alertService.showAlert('Ups', 'Error, intente más tarde');
      }));
    }
  }

  private getPaises(): void {
    this.subscription$.add(this.paisService.getPaises().subscribe(data => {
      this.paises = data;
    }, (e) => {
      this.alertService.showAlert('Ups', 'Sucedió un error, por favor intenta más tarde.');
    }));
  }
}

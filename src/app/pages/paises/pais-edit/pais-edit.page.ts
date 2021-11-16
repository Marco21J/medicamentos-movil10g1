import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaisService } from '../services/pais.service';
import { AlertService } from '../../../shared/services/alert.service';
import { Subscription } from 'rxjs';
import { IPaisRead } from '../models/interfaces/pais.interface';

@Component({
  selector: 'app-pais-edit',
  templateUrl: './pais-edit.page.html',
  styleUrls: ['./pais-edit.page.scss'],
})
export class PaisEditPage implements OnInit, OnDestroy {

  public pais: IPaisRead;
  private subscription$: Subscription = new Subscription();
  private id: string;

  constructor(
    private route: ActivatedRoute, private router: Router,
    private paisService: PaisService,
    ) {
      this.id = this.route.snapshot.paramMap.get('id');
    }

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    this.getPais();
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  private getPais(): void {
    this.subscription$.add(this.paisService.getPais(this.id).subscribe(data => {
      this.pais = data;
    }, (e) => {
      this.router.navigateByUrl('/paises');
    }));
  }

}

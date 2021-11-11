import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

  public text = '';
  private subscription$: Subscription = new Subscription();

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.subscription$.add(this.homeService.testEndpoint().subscribe(data => {
      console.log(data);
    }, (e) => console.log));
  }

  public onClick(): void {
    this.text = this.homeService.testMethod();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}

import { Component } from '@angular/core';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'], 
})
export class HomePage {

  public text = '';

  constructor(private homeService: HomeService) {}

  public onClick(): void {
    this.text = this.homeService.testMethod();
  }

}

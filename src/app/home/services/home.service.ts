import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  public testMethod(): string {
    return 'Hello world from Ionic, I am a method from home service';
  }

  public getMessage(): string {
    return 'hola';
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPaisRead } from '../../pages/paises/models/interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public testMethod(): string {
    return 'Hello world from Ionic, I am a method from home service';
  }

  public getMessage(): string {
    return 'hola';
  }

  public testEndpoint(): Observable<IPaisRead[]> {
    return this.http.get<IPaisRead[]>('/paises');
  }

}

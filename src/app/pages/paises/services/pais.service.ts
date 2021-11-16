import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPaisDelete, IPaisRead, IPaisRequest } from '../models/interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) { }

  public getPaises(): Observable<IPaisRead[]> {
    return this.http.get<IPaisRead[]>('/paises');
  }

  public getPais(id: string): Observable<IPaisRead> {
    return this.http.get<IPaisRead>(`/paises/${id}`);
  }

  public newPais(pais: IPaisRequest): Observable<IPaisRead> {
    return this.http.post<IPaisRead>('/paises', pais);
  }

  public editPais(pais: IPaisRequest, id: string): Observable<IPaisRequest> {
    return this.http.put<IPaisRequest>(`/paises/${id}`, pais);
  }

  public deletePais(id: number): Observable<IPaisDelete> {
    return this.http.delete<IPaisDelete>(`/paises/${id}`);
  }
}

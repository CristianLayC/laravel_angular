import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tarea } from './tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  private data: Tarea[] = [];
  private _url = 'http://localhost:8000/Tareas';

  constructor(private http: HttpClient) { }

  read() : Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this._url);
  }

  readDetail(id: any) : Observable<Tarea> {
    return this.http.get<Tarea>(this._url+'/'+id);
  }

  insert(data: Tarea){
    return this.http.post(this._url, data);
  }

  update(data: Tarea){
    console.log(data);
    return this.http.put(this._url+'/'+data.id, data);
  }

  delete(id: any){
    return this.http.delete(this._url+'/'+id);
  }
}

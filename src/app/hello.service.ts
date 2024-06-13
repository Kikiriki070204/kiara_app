import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hello } from './hello';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(protected http: HttpClient) { }

  hello(): Observable<Hello>{
    return this.http.get<Hello>('https://4988-2806-267-1489-93eb-5538-a77e-2c0-9c5e.ngrok-free.app/api/hello')
  }
}

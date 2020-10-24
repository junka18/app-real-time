import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 const endPoint: string ="assets/json/mainMenu.json";

 @Injectable({
  providedIn: 'root'
})
export class MainTopBarMenuService {

  constructor (private http: HttpClient) { }
  getItemMenu(){

    return this.http.get(endPoint);
  }
}

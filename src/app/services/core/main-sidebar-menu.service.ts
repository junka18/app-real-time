import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

 const endPoint2: string ="assets/json/sibeBar.json";
@Injectable({
  providedIn: 'root'
})
export class MainSidebarMenuService {

  constructor (private http: HttpClient) { }
  getItemSidebarMenu(){

    return this.http.get(endPoint2);
  }
}

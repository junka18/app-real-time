import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private subject$ = new Subject<string>();


  constructor() { }
/**
 * 
 * @param criterio Metodo para publiacion del observable
 */
  sendCriterio(criterio: string) {
    this.subject$.next(criterio);
  }
  /**
   * metodo para subscribirnos la observable
   */
  onListenCriterio(): Observable<string> {
    return this.subject$.asObservable();
  }

}

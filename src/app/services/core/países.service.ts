import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const END_POINT = 'https://restcountries.eu/rest/v2';

@Injectable({
  providedIn: 'root'
})
export class PaísesService {

  constructor(private http: HttpClient) { }
  
  /**
   * get all countries
   */
  getAllPaises() {
    return this.http.get(`${END_POINT}/all`);
  }
  /** 
    *
    *@param region =>claquier africa asia americas europa oceania 
  
  
    */
  getPaisesByRegion(region: string) {
    return this.http.get(`${END_POINT}/region/${region}`);
  }
  /** 
  *
  *@param criterio =>claquier criterio de busqueda 


  */

  getPaisByCriterio(criterio: string) {
    return this.http.get(`${END_POINT}/name/${criterio}`);
  }
   /**
   * 
   * @param code 
   */
  getPaisByCode(code: string) {
    return this.http.get(`${END_POINT}/alpha/${code}`);
  }

}

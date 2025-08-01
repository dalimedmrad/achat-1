import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperateurService {
  // readonly API_URL = 'http://192.168.50.4:8090/api/operateur';
  readonly API_URL = '/api/operateur';

  constructor(private httpClient: HttpClient) { }

  getAllOperateurs() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-operateurs`)
  }
  addOperateur(operateur : any) {
    return this.httpClient.post(`${this.API_URL}/add-operateur`, operateur)
  }
  editOperateur(operateur : any){
    return this.httpClient.put(`${this.API_URL}/modify-operateur`, operateur)
  }
  deleteOperateur(idOperateur : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-operateur/${idOperateur}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecteurActiviteService {
  // readonly API_URL = 'http://192.168.50.4:8090/api/secteurActivite';
  readonly API_URL = '/api/secteurActivite';

  constructor(private httpClient: HttpClient) { }

  getAllSecteurActivites() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-secteurActivite`)
  }
  addSecteurActivite(secteurActivite : any) {
    return this.httpClient.post(`${this.API_URL}/add-secteurActivite`, secteurActivite)
  }
  editSecteurActivite(secteurActivite : any){
    return this.httpClient.put(`${this.API_URL}/modify-secteurActivite`, secteurActivite)
  }
  deleteSecteurActivite(idSecteurActivite : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-secteurActivite/${idSecteurActivite}`)
  }
}

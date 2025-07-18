import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  // readonly API_URL = 'http://192.168.50.4:8090/api/stock';
  readonly API_URL = '/api/stock';

  constructor(private httpClient: HttpClient) { }

  getAllStocks() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-stocks`)
  }
  addStock(stock : any) {
    return this.httpClient.post(`${this.API_URL}/add-stock`, stock)
  }
  editStock(stock : any){
    return this.httpClient.put(`${this.API_URL}/modify-stock`, stock)
  }
  deleteStock(idStock : any){
    return  this.httpClient.delete(`${this.API_URL}/remove-stock/${idStock}`)
  }
}

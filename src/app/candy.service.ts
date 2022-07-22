import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandyService {
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  getCandies() {
    return this.http.get<{id: number, name: string, description: string, price: number}[]>('http://localhost:3000/candy')
  }

  addCandy(data: any) {
    this.http.get<{id: number, name: string, description: string, price: number}[]>('http://localhost:3000/candy').forEach(candies => {
      if(candies.length > 0) data.id = candies.length++;
      else data.id = 1
    })
    this.http.post('http://localhost:3000/candy', data).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  updateCandy(id: number, data: any) {
    this.http.put(`http://localhost:3000/candy/${id}`, data).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }

  deleteCandy(id: number) {
    this.http.delete(`http://localhost:3000/candy/${id}`).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    })
  }
}

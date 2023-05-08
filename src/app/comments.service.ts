import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  commentiURL: string = 'http://localhost:3000/commenti'

  constructor(private http: HttpClient) { }

  getCommenti() {
    return this.http.get(this.commentiURL)
    .subscribe(commento => { console.log(commento) })
  }

  postCommento() {
    this.http.post(this.commentiURL, {
      messaggio: 'Questo è un altro messaggio'
    })
    .subscribe(()=> { console.log('Commento Aggiunto!') })

  }
}

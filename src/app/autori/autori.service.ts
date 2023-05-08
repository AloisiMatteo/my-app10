import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autore } from './autore.model';

@Injectable({
  providedIn: 'root'
})
export class AutoriService {
  autoriURL: string = 'http://localhost:3000/autore'

  constructor(private http: HttpClient) { }

  getAutore() {
    return this.http.get<Autore[]>(this.autoriURL)
  }
  setAutore(nome: string, materia: string) {
    return this.http.post(this.autoriURL, {
      nome: nome,
      materia: materia
    })
    .subscribe(()=> {
      console.log('Autore Aggiunto con successo!')
    })
  }
  cancellaAutore(id: number) {
    return this.http.delete(`${this.autoriURL}/${id}`)
    .subscribe(()=> {
      console.log('Cancellazione avvenuta con successo!')
    })
  }
  getAutoreByMateria(materia: string) {
    return this.http.get<Autore[]>(`${this.autoriURL}?materia=${materia}`)
  }
}


// Creare una rotta autore
//   Inserire un form per la gestione dell'utente
//   Prevedere la cancellazione byId
//   Crea dei pulsanti materia nei quali al click restituiscono solo gli autori di quella materia

import { Component, OnInit } from '@angular/core';
import { AutoriService } from './autori.service';
import { Autore } from './autore.model';

@Component({
  selector: 'app-autori',
  templateUrl: './autori.component.html',
  styleUrls: ['./autori.component.css']
})
export class AutoriComponent implements OnInit {
  autori: Autore[] = []
  nome: string = ''
  materia: string = ''

  constructor(private autoriService: AutoriService) {}

  onAggiungiAutore() {
    this.autoriService.setAutore(this.nome, this.materia)
  }
  ngOnInit(): void {
    this.autoriService.getAutore()
    .subscribe((autori)=> {
      this.autori = autori
    })

  }
}

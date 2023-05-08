import { Component, Input, OnInit } from '@angular/core';
import { Autore } from '../autore.model';
import { AutoriService } from '../autori.service';

@Component({
  selector: 'app-autore',
  templateUrl: './autore.component.html',
  styleUrls: ['./autore.component.css']
})
export class AutoreComponent implements OnInit {
  autori: Autore[] = []
  autoriFiltrati: Autore[] = []
  @Input() autore!: Autore

  constructor(private autoreService: AutoriService) {}
  ngOnInit(): void {
    this.autoreService.getAutore()
    .subscribe((autori)=> {
      this.autori = autori
    })
  }

  onCancellaByID(id: number) {
    this.autoreService.cancellaAutore(id);
  }
  onStampaByMateria(materia: string) {
    this.autoreService.getAutoreByMateria(materia)
    .subscribe((autori)=> {
      this.autoriFiltrati = autori
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app10-HTTP';

  constructor(private userService: UsersService, private commentoService: CommentsService) {}


  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe(utenti => {
      console.log(utenti)
    })

    // Non faccio il subscribe perchè gia eseguito all'interno del service
    this.commentoService.getCommenti();

    this.commentoService.postCommento();
  }
}

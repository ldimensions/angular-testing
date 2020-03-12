import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { stat } from 'fs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [];
  component: any;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(id) {
    this.service.deleteUser(id);
  }

}

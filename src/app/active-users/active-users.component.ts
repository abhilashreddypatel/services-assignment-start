import { Component, OnInit } from '@angular/core';
import { accountService } from '../account.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  constructor(private as: accountService) {
  }
  users: string[];

  ngOnInit(): void {
    this.users = this.as.activeUsers;
  }

  onSetToInactive(id: number) {
    this.as.onSetToInactive(id);
  }

}





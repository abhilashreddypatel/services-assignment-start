import { Component, OnInit } from '@angular/core';
import { accountService } from '../account.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  constructor(private as: accountService) { }

  users: string[];

  ngOnInit(): void {
    this.users = this.as.inactiveUsers;
  }



  onSetToActive(id: number) {
    this.as.onSetToActive(id);
  }
}

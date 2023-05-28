import { Injectable } from "@angular/core";

import { EventEmitter } from "@angular/core";
import { counterservice } from "./counter.service";


@Injectable()

export class accountService{

  constructor(private cs:counterservice){}
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];


    userStatusActive=new EventEmitter<number>();
    userStatusinActive=new EventEmitter<number>();
    
    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.cs.activetoInActive();
      }
    
      onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.cs.inactivetoActive();
      }
}
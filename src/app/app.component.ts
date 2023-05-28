import { Component } from '@angular/core';
import { accountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [accountService]
})
export class AppComponent {

}

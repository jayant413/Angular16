import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Structure Directives';
  isLoggedIn: boolean = false;
  username: string = 'Jayant';

  handleLogIn() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  ch: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  grade: string = 'A';
}

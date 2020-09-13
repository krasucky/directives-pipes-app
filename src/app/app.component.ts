import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loremValue = 'lorem ipsum';
  public example = 'LOREM IPSUM';
  public jsonObject = {
    properties: 'lorem'
  };
  public birthday = Date.now();
  public isAuthenticated = false;
  public persons: string[] = ['Adam Kowalski', 'Marcin Janiak', 'Robert Lewandowski'];
  public lorem = 'lorem-ipsum-example';
}



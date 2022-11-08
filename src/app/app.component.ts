import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Vrushali';
  constructor(){
    setTimeout(() => {
      this.name="Vrusha :)"
    }, 3000);
  }
}

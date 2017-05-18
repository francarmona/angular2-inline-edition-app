import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  item: any = { };

  content: string = 'Html content';

  constructor(){
    this.item.image = '';
  }

}

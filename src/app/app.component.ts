import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  myname = '';
  firstName = 'Santosh';
  lastName = 'Mohan';
  title = 'Angular Property Binding Example';

  //Example 1
  isDisabled = true;
}

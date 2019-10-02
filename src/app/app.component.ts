import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-group-by-alphabates';

  input = [{"name": "John"}, {"name": "Mary"}, {"name": "Mike"}, {"name": "Julie"}, {"name": "Adam"}];
  sortKey = 'name';

  input1 = ["John", "Mary", "Mike", "Julie", "Adam"];

  name = '';
  obj = {};
}

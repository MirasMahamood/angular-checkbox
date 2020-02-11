import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  categoryList: any[] = [
    { id: 1, name: 'HCM', selected: false },
    { id: 2, name: 'Finance', selected: false },
    { id: 3, name: 'SCM', selected: false }
  ];
  
  checkAll(event) {
    this.categoryList.forEach(category => category.selected = event.target.checked)
  }

  isAllChecked() {
    return this.categoryList.every(category => category.selected);
  }
}

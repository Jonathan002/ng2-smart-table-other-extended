import { Component } from '@angular/core';

@Component({
  selector: 'basic-example',
  template: `
    <ng2-smart-table [settings]="settings"></ng2-smart-table>
  `,
})
export class BasicExampleComponent {

  settings = {
    columns: {
      id: {
        title: 'ID',
        width: '100px',
        class: 'check-if-class-works'
      },
      name: {
        title: 'Full Name',
        width: '40%',
        class: 'check-if-class-works'
      },
      username: {
        title: 'User Name',
        class: 'check-if-class-works'
      },
      email: {
        title: 'Email',
        class: 'check-if-class-works'
      },
    },
  };

}

# ng2-smart-table-other-extended

This is a extended version of [ng2-smart-table](https://github.com/akveo/ng2-smart-table) that allows you to simply specify classes for each table cell directly in the source data that is provided to the table. (**Note:** Please do not confuse this repo with [ng2-smart-table-extended](https://www.npmjs.com/package/ng2-smart-table-extended).. This is the *OTHER* extended fork and was just made to satisfy my project needs. Anyone that would like to use this code is free to do anything they like with it).

Somewhere in your component.ts / .js file..
```
// example settings
settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
        type: 'custom',
        renderComponent: CustomRenderComponent,
      },
      username: {
        title: 'User Name',
      },
      link: {
        title: 'Link',
        type: 'html',
        editor: {
          type: 'custom',
          component: CustomEditorComponent,
        },
      },
    },
  };
  
// example source data
data = [
    {
      id: 1,
      name: {
        td: 'Test Graham',
        class: 'my-own-class' // <-- feature added
      },
      username: 'Bret',
      link: '<a href="http://www.google.com">Google</a>',
    },
    {
      id: 2,
      name: 'Ervin Howell', // can also still use like normal..
      username: 'Antonette',
      link: '<a href="https://github.com/akveo/ng2-admin">Ng2 Admin</a>',
    }
]

```

In .html template file
```
<ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
```

## Ng2 Smart Table Info and Documentation,
For more info on ng2-smart-table and it's full documentation see the [original repo](https://github.com/akveo/ng2-smart-table).

## License
[MIT](LICENSE.txt) license.

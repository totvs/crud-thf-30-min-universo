import { Component, OnInit } from '@angular/core';

import { ThfPageDynamicTableActions, ThfPageDynamicTableField } from '@totvs/thf-templates';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {

  readonly actions: ThfPageDynamicTableActions = {
    detail: 'people/view/:id',
    edit: 'people/edit/:id',
    new: 'people/new',
    remove: true
  };

  readonly fields: Array<ThfPageDynamicTableField> = [
    { property: 'id', key: true },
    { property: 'name', label: 'Nome' },
    { property: 'birthdate', label: 'Data de nascimento', type: 'date' }
  ];

}

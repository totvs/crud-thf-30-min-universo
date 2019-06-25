import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ThfPageDynamicEditActions, ThfPageDynamicEditField } from '@totvs/thf-templates';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {
  title = 'Nova Pessoa';

  readonly actions: ThfPageDynamicEditActions = {
    cancel: '/',
    save: '/'
  };

  readonly fields: Array<ThfPageDynamicEditField> = [
    { property: 'id', key: true, visible: false },
    { label: 'Nome', property: 'name', divider: 'Dados pessoais' },
    { label: 'Data de nascimento', property: 'birthdate', type: 'date' },
    { label: 'Gênero', property: 'genre', gridXlColumns: 4, options: [
      { value: 'feminino', label: 'Feminino' },
      { value: 'masculino', label: 'Masculino' }
    ]},
    { label: 'Rua', property: 'street', divider: 'Endereço' },
    { label: 'Cidade', property: 'city' },
    { label: 'País', property: 'country' }
  ];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.title = params.id ? `Editando Pessoa ${params.id}` : 'Nova Pessoa';
    });
  }

}

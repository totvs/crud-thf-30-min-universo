# Implementando CRUD com THF em 30 minutos

Este projeto foi desenvolvido no universo TOTVS, com o desafio de ser contruindo um CRUD básico utilizando THF em 30 minutos.

### people-list.component

> HTML
```
<thf-page-dynamic-table
  t-title="Pessoas"
  t-service-api="https://thf.totvs.com.br/sample/api/people"
  [t-actions]="actions"
  [t-fields]="fields">
</thf-page-dynamic-table>
```

> TS
```
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

```

### people-view.component

> HTML
```
<thf-page-dynamic-detail
  t-service-api="https://thf.totvs.com.br/sample/api/people"
  [t-title]="title"
  [t-actions]="actions"
  [t-fields]="fields">
</thf-page-dynamic-detail>
```

> TS
```
fields: Array<ThfPageDynamicDetailField> = [
    { property: 'id', gridColumns: 2, key: true, divider: 'Dados pessoais' },
    { property: 'name', label: 'Nome', gridXlColumns: 4, gridLgColumns: 4 },
    { property: 'birthdate', type: 'date', label: 'Data de aniversário', gridXlColumns: 4, gridLgColumns: 4 },
    { property: 'genre', tag: true, label: 'Gênero', gridColumns: 2, gridSmColumns: 6 },
    { property: 'street', divider: 'Endereço', label: 'Rua' },
    { property: 'city', label: 'Cidade' },
    { property: 'country', label: 'País' }
  ];
```

### people-form.component

> HTML
```
<thf-page-dynamic-edit
  t-service-api="https://thf.totvs.com.br/sample/api/people"
  [t-title]="title"
  [t-actions]="actions"
  [t-fields]="fields">
</thf-page-dynamic-edit>
```

> TS
```
fields: Array<ThfPageDynamicEditField> = [
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
```

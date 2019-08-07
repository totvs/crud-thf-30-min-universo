# Implementando listagem com THF

### app-routing.module.ts
```
const routes: Routes = [
  { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) },
  { path: '', redirectTo: '/people', pathMatch: 'full'},
  { path: 'index.html', redirectTo: '/people', pathMatch: 'full'}
];
```

### app.component.ts
```
readonly menus: Array<ThfMenuItem> = [
  { label: 'Pessoas', link: '/people' }
];
```

### people.module.ts
```
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    SharedModule
  ]
})
```

### people-rounting.module.ts
```
import { PeopleListComponent } from '../people-list/people-list.component';

const routes: Routes = [
  { path: '', component: PeopleListComponent }
];
```

### people-list.component.html
```
<thf-page-dynamic-table
  t-title="Pessoas"
  t-service-api="https://thf.totvs.com.br/sample/api/people"
  [t-fields]="fields">
</thf-page-dynamic-table>
```

### people-list.component.ts
```
import { ThfPageDynamicTableField } from '@totvs/thf-templates';
```

```
readonly fields: Array<ThfPageDynamicTableField> = [
  { property: 'id', key: true },
  { property: 'name', label: 'Nome' },
  { property: 'birthdate', label: 'Data de nascimento', type: 'date' }
];
```

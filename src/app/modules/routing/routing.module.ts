import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SixShotsComponent} from '../../components/six-shots/six-shots.component';
import {ShotComponent} from '../../components/shot/shot.component';

const routes: Routes = [
  {path: '', redirectTo: '/six-shots', pathMatch: 'full'},
  {path: 'six-shots', component: SixShotsComponent},
  {path: 'shot/:id', component: ShotComponent},
  {path: '**', component: SixShotsComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class RoutingModule {
}



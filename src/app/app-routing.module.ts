import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RequestsComponent} from "./pages/requests/requests.component";
import {AddRequestComponent} from "./pages/add-request/add-request.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-requests',
    pathMatch: 'full',
  },
  {
    path: 'all-requests',
    component: RequestsComponent,
  },
  {
    path: 'add-request',
    component: AddRequestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  headerItems = [
    {
      path: '/all-requests',
      title: 'Pieprasījumi',
    },
    {
      path: '/add-request',
      title: 'Pievienot pieprasījumu',
    }
  ];
}

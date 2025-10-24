import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { RouterModule } from '@angular/router';

@Component({
 selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [RouterModule, Nav]
})
export class Home {

}

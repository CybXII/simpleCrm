import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NavigationComponent,MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}

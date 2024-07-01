import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-dialog-show-user',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './dialog-show-user.component.html',
  styleUrls: ['./dialog-show-user.component.scss'],
})
export class DialogShowUserComponent {
  user: User = {
    firstname: '',
    lastname: '',
    birthDate: 0,
    street: '',
    zipCode: '',
    city: '',
    email: '',
  }
  constructor(@Inject(MAT_DIALOG_DATA) public data: User) {
    this.user = data;
  }
}
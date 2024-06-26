import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { log } from 'node:console';
@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatProgressBarModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss',
})
export class DialogAddUserComponent {
  loading = false;

  user: User = {
    firstname: '',
    lastname: '',
    birthDate: 0,
    street: '',
    zipCode: '',
    city: '',
    email: '',
    id: '',
  };
  birthDate?: Date;
  constructor(
    private firestore: Firestore,
    public dialogRef: MatDialogRef<DialogAddUserComponent>
  ) {}

  ngOnInit(): void {}
  saveUser() {
    const usersCollectionRef = collection(this.firestore, 'users');
    addDoc(usersCollectionRef, this.user).then(() => {
      console.log('User saved');
    });
    if (this.birthDate) {
      this.user.birthDate = this.birthDate.getTime();
      console.log(this.user);
    }
  }
}

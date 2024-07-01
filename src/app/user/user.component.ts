import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { NgFor } from '@angular/common';
import { User } from '../../models/user.class';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { getDoc } from 'firebase/firestore';
import { DialogShowUserComponent } from '../dialog-show-user/dialog-show-user.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    NgFor,
    AppComponent,
    DialogShowUserComponent
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  users: User[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const usersCollectionRef = collection(this.firestore, 'users');
    collectionData(usersCollectionRef).subscribe({
      next: (users: User[]) => {
        this.users = users;
        this.cdr.detectChanges(); // Manuelle Change Detection
      },
      error: (error: any) => {
        console.error('Error loading users:', error);
      }
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  openUserDialog(user: User) {
    this.dialog.open(DialogShowUserComponent, {
      data: user});
    }
}
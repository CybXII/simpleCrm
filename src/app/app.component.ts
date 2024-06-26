import {Component, inject } from '@angular/core';
import {RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {Firestore, collection, collectionData } from '@angular/fire/firestore';
import {Observable } from 'rxjs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule,MatSidenavModule,MatIconModule,MatToolbarModule,RouterLink,MatProgressBarModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simple-crm-c9a56';
  showFiller = false;
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;

  constructor() {
    const Collection = collection(this.firestore, 'users');
    this.items$ = collectionData(Collection);
  }
}
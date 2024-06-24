import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyAkwlQHEXDaQkRPtMflL-kMSVzZho62NYE",
        authDomain: "simplecrm-a140e.firebaseapp.com",
        projectId: "simplecrm-a140e",
        storageBucket: "simplecrm-a140e.appspot.com",
        messagingSenderId: "718447915453",
        appId: "1:718447915453:web:7e94656803053320fde2d4"
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};

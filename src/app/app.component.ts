import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { 
  IonApp, IonRouterOutlet, IonItem, IonLabel, IonIcon, 
  IonMenu, IonContent, IonList, IonMenuToggle, IonHeader, 
  IonToolbar, IonTitle, IonListHeader 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, medkit, body, fitness } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterLinkActive, 
    IonApp, IonRouterOutlet, IonItem, IonLabel, IonIcon, 
    IonMenu, IonContent, IonList, IonMenuToggle, 
    IonHeader, IonToolbar, IonTitle, IonListHeader
  ],

})
export class AppComponent { 
  
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Vías Parenterales', url: '/parenterales', icon: 'medkit' }, 
    { title: 'Vía Intradérmica', url: '/intradermica', icon: 'body' },
    { title: 'Vía Intramuscular', url: '/intramuscular', icon: 'fitness' }, 
  ];

  constructor() {
    addIcons({ home, medkit, body, fitness });
  }
}

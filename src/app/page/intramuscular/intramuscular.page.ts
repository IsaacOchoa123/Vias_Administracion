
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonButton, 
  IonIcon, 
  IonGrid,   // <--- Asegúrate que esté aquí
  IonRow,    // <--- Asegúrate que esté aquí
  IonCol,    // <--- Asegúrate que esté aquí
  IonBackButton 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { caretDownOutline, arrowBackOutline } from 'ionicons/icons';

@Component({
  selector: 'app-intramuscular',
  templateUrl: './intramuscular.page.html',
  styleUrls: ['./intramuscular.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonButton, 
    IonIcon, 
    IonGrid,   // <--- Importante incluirlo aquí también
    IonRow,    // <--- Importante incluirlo aquí también
    IonCol,    // <--- Importante incluirlo aquí también
    IonBackButton
  ]
})
export class IntramuscularPage implements OnInit {
  constructor() {
    addIcons({ caretDownOutline, arrowBackOutline });
  }

  ngOnInit() {}
}
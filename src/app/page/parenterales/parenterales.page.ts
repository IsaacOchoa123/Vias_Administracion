import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// 1. Asegúrate de importar los componentes de Ionic aquí

import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton, 
  IonGrid, 
  IonRow, 
  IonCol,
  IonIcon, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-parenterales',
  templateUrl: './parenterales.page.html',
  styleUrls: ['./parenterales.page.scss'],
  standalone: true,
  // 2. Agrégalos a la lista de imports del componente
  imports: [IonButton, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonBackButton, 
    IonGrid, 
    IonRow, 
    IonCol,
    IonIcon,
    CommonModule, 
    FormsModule
  ]
})
export class ParenteralesPage implements OnInit {
  constructor() { }
  ngOnInit() { }
}
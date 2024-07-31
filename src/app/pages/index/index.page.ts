import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton ,IonGrid ,IonRow ,IonCol ,IonLabel ,IonButton ,IonIcon} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule , IonGrid ,IonRow ,IonCol ,IonLabel ,IonButton ,IonIcon]
})
export class IndexPage implements OnInit {

  constructor() {
    addIcons({ cartOutline });
  }



  ngOnInit() {
  }

}

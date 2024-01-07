import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from 'src/app/Components/chat/chat.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async AbrirModal(){
    const modal = await this.modalController.create({
      component: ChatComponent,
      cssClass: 'modal',
      presentingElement: await this.modalController.getTop(),
    });
    await modal.present();
  }

}
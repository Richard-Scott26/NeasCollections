import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChatComponent } from 'src/app/Components/chat/chat.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async AbrirModal(){
    const modal = await this.modalController.create({
      component: ChatComponent
    });
    await modal.present();
  }

}

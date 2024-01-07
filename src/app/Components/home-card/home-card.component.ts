import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent  implements OnInit {
  @Input() title: string = '';
  @Input() intro: string = '';
  @Input() description: string = '';
  @Input() chats: string = '';
  @Input() twitter: string = '';
  @Input() instagram: string = '';
  @Input() favorites: string = '';
  @Input() facebook: string = '';
  @Input() day: string = '';
  @Input() month: string = '';
  @Input() img: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}

  onClick(){
    this.router.navigate(['/product-detail']);
  }

}

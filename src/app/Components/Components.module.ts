import { CommonModule } from "@angular/common";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { HomeCardComponent } from "./home-card/home-card.component";
import { GalleryCardComponent } from "./gallery-card/gallery-card.component";
import { DetailCardComponent } from "./detail-card/detail-card.component";
import { ChatComponent } from "./chat/chat.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { SidemenuComponent } from "./sidemenu/sidemenu.component";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        HomeCardComponent,
        GalleryCardComponent,
        DetailCardComponent,
        ChatComponent,
        NavbarComponent,
        FooterComponent,
        SidemenuComponent
    ],
    exports: [
        HomeCardComponent,
        GalleryCardComponent,
        DetailCardComponent,
        ChatComponent,
        NavbarComponent,
        SidemenuComponent,
        FooterComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class ComponentsModule { }
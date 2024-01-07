import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { Message } from 'src/app/Models/Message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit{

  @ViewChild(IonContent, {static: false}) content!: IonContent

  messages: Message[] = [
    {
      sender: 'me',
      content: 'Hola como estas?'
    },
    {
      sender: 'bot',
      content: 'Bien y tu como estas?'
    }
  ];

  form = new FormGroup ({
    prompt: new FormControl('', [Validators.required])
  })

  loading: boolean = false;

  constructor() {} 

  ngOnInit(){

  }


  submit(){
    if(this.form.valid){

      let promt = this.form.value.prompt as string;

      // == mensaje del usuario ===
      let userMsg: Message = {
        sender: 'me',
        content: promt
      }
      this.messages.push(userMsg);

      // == mensaje del usuario ===
      let botMsg: Message = {
        sender: 'bot',
        content: ''
      }
      this.messages.push(botMsg);

      this.scrollToBottom();
      this.form.reset();
      this.form.disable();

      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.typeText('estoy bien y tu?')

        this.form.enable();
      }, 2000)

    }
    
  }

  typeText(text: string){
    let textIndex = 0;
    let messagesLasIndex = this.messages.length - 1;

    let interval = setInterval(() => {
      if(textIndex < text.length){
        this.messages[messagesLasIndex].content += text.charAt(textIndex);
        textIndex++;
      } else {
        clearInterval(interval);
        this.scrollToBottom();
      }
    }, 15)
  }


  scrollToBottom(){
    this.content.scrollToBottom(2000);
  }
}

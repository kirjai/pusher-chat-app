import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent {
  user: string;
  message: string;

  constructor(private messageService: MessageService) { }

  newMessage(text: string, user: string): void {
    this.messageService.send({text: text, user: user});
    this.message = '';
  }

}

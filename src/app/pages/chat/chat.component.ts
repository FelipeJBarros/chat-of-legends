import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  messages = [
    {
      text: "Oi, tudo bem?",
      type: "send"
    },
    {
      text: "Tudo bem sim",
      type: "receive"
    },
    {
      text: "e com você? tudo bem?",
      type: "receive"
    },
    {
      text: "Tudo bem sim",
      type: "send"
    },
    {
      text: "Legal demais menorzada xesquedele",
      type: "send"
    },
    {
      text: "OK",
      type: "receive"
    }
  ]
}

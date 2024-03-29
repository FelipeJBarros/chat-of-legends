import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements AfterViewInit{
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

  champTest = {
    id: 1,
    name: "Poppy",
    role: "Tank",
    lore: "Yordle portadora do martelo",
    imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg"
  }

  @ViewChild('endOfChat') endAnchor!: ElementRef;

  ngAfterViewInit() {
    this.scroolToEndChat();
  }

  scroolToEndChat(behavior: "instant" | "smooth" = "instant") {
    setTimeout(() => {
      if(this.endAnchor) {
        this.endAnchor.nativeElement.scrollIntoView({ behavior });
      }
    }, 100);
  }

  addMessage() {
    this.messages.push({
      text: "Isso é um teste",
      type: "sender"
    });
    this.scroolToEndChat("smooth");
  }
}

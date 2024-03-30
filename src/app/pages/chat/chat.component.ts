import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SendIconComponent } from '../../components/icons/send-icon/send-icon.component';
import { ChampionType } from '../../types/ChampionType';
import { ChampionsService } from '../../services/champions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,

    SendIconComponent
  ],
  providers: [ChampionsService],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements AfterViewInit, OnInit{
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

  champion!: ChampionType

  @ViewChild('endOfChat') endAnchor!: ElementRef;

  constructor(
    private championService: ChampionsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.championService.findChampionById(params['id']).subscribe(
        data => this.champion = data
      )
    });
  }

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

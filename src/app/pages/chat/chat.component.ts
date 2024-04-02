import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SendIconComponent } from '../../components/icons/send-icon/send-icon.component';
import { ChampionType } from '../../types/ChampionType';
import { ChampionsService } from '../../services/champions.service';
import { ActivatedRoute } from '@angular/router';
import { MessageType } from '../../types/MessageType';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SendIconComponent
  ],
  providers: [ChampionsService],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements AfterViewInit, OnInit{
  champion!: ChampionType;
  messages: MessageType[] = [];
  
  chatForm = this.formBuilder.group({
    input: ''
  });

  @ViewChild('endOfChat') endAnchor!: ElementRef;

  constructor(
    private championService: ChampionsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.championService.findChampionById(params['id']).subscribe(
        data => {
          this.champion = data
          this.messages = []
        }
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

  async onSubmit(): Promise<void> {
    let message = String(this.chatForm.value.input);
    this.addMessage(message, "send");

    this.championService.askChampion(this.champion.id, message)
      .subscribe(data => {
        this.addMessage(data.answer, 'receive');
        this.scroolToEndChat("smooth");
      });

    this.chatForm.reset();
    this.scroolToEndChat("smooth");
  }

  addMessage(text: string, type: "send" | "receive"): void {
    this.messages.push({
      text: text,
      type: type
    } as MessageType)
  }
}

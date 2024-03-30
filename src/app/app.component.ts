import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ChampionType } from './types/ChampionType';
import { ChampionsService } from './services/champions.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,

    ContactComponent
  ],
  providers: [
    ChampionsService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  contacts: ChampionType[] = [];

  constructor(private championService: ChampionsService) {}

  ngOnInit(): void {
    this.championService.listAllChampions().subscribe(
      data => this.contacts = data
    );
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chat-of-legends';

  contacts = [
    {
      id: 1,
      name: "Poppy",
      role: "Tank",
      lore: "Yordle portadora do martelo",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg"
    },
    {
      id: 2,
      name: "Ornn",
      role: "Tank",
      lore: "Deus da forja de Frejord",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg"
    },
    {
      id: 3,
      name: "Vladmir",
      role: "Mago",
      lore: "Vampiro hemomante de Noxus",
      imageUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladmir_0.jpg"
    },
  ]
}

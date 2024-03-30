import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { ChampionType } from '../types/ChampionType';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(private httpClient: HttpClient) { }

  listAllChampions() {
    return this.httpClient.get<ChampionType[]>(`${env.apiUrl}/champions`);
  }

  findChampionById(championId: number) {
    return this.httpClient.get<ChampionType>(`${env.apiUrl}/champions/${championId}`);
  }

  askChampion(championId: number, question: string) {}
}

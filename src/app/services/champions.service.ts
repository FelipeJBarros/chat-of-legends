import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { ChampionType } from '../types/ChampionType';
import { catchError, throwError } from 'rxjs';
import { ChatResponseType } from '../types/ResponseType';

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

  askChampion(championId: number, question: string) {
    return this.httpClient.post<ChatResponseType>(`${env.apiUrl}/champions/${championId}/ask`, { question: question })
    .pipe(
      catchError(this.handleError)
    );;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}

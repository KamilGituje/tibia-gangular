import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Character } from "./character";
import { CharacterForCreation } from "./characterForCreation";
import { Item } from "./item";
import { SecurityService } from "./security/security.service";


@Injectable({
    providedIn: "root"
})
export class CharacterService {
    constructor(private http: HttpClient) {}

    private charactersUrl = "https://localhost:7107/api/characters"
    characterId: number;
    httpHeaders: HttpHeaders;

    getCharacter(characterId: number): Observable<Character> {
        return this.http.get<Character>(`${this.charactersUrl}/${characterId}`);
    }
    getCharactersForUser(userId: string): Observable<Character[]> {
        return this.http.get<Character[]>(`${this.charactersUrl}/user/${userId}`);
    }
    createCharacter(character: CharacterForCreation, userId: string): Observable<Character> {
        return this.http.post<Character>(`${this.charactersUrl}/create/${userId}`, character);
    }
    killMonster(monsterId: number): Observable<Item[]> {
        return this.http.put<Item[]>(`${this.charactersUrl}/${this.characterId}/actions/killmonster/${monsterId}`, null);
    }
    getCharactersPaged(page: number): Observable<Character[]> {
        return this.http.get<Character[]>(`${this.charactersUrl}?page=${page}`)
    }
    sellItem(npcId: number, itemId: number): Observable<number> {
        return this.http.put<number>(`${this.charactersUrl}/${this.characterId}/actions/sellitem/${npcId}/${itemId}`, null)
    }
    getItemsInBp(): Observable<Item[]> {
        return this.http.get<Item[]>(`${this.charactersUrl}/${this.characterId}/backpack`)
    }
}

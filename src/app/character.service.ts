import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiPaths } from "src/environments/ApiPaths";
import { environment } from "src/environments/environment";
import { Character } from "./character";
import { CharacterForCreation } from "./characterForCreation";
import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class CharacterService {
    constructor(private http: HttpClient) {}

    private baseUrl = environment.baseUrl;
    characterId: number;

    getCharacter(characterId: number): Observable<Character> {
        return this.http.get<Character>(`${this.baseUrl}/${ApiPaths.character}/${characterId}`);
    }
    getCharactersForUser(userId: string): Observable<Character[]> {
        return this.http.get<Character[]>(`${this.baseUrl}/${ApiPaths.character}/${ApiPaths.user}/${userId}`);
    }
    createCharacter(character: CharacterForCreation, userId: string): Observable<Character> {
        return this.http.post<Character>(`${this.baseUrl}/${ApiPaths.character}/create/${userId}`, character);
    }
    killMonster(monsterId: number): Observable<Item[]> {
        return this.http.put<Item[]>(`${this.baseUrl}/${ApiPaths.character}/${this.characterId}/actions/killmonster/${monsterId}`, null);
    }
    getCharactersPaged(page: number): Observable<Character[]> {
        return this.http.get<Character[]>(`${this.baseUrl}/${ApiPaths.character}?page=${page}`)
    }
    sellItem(npcId: number, itemId: number): Observable<number> {
        return this.http.put<number>(`${this.baseUrl}/${ApiPaths.character}/${this.characterId}/actions/sellitem/${npcId}/${itemId}`, null)
    }
    getItemsInBp(): Observable<Item[]> {
        return this.http.get<Item[]>(`${this.baseUrl}/${ApiPaths.character}/${this.characterId}/backpack`)
    }
}

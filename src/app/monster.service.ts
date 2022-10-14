import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Monster } from "./monster";

@Injectable({
    providedIn: "root"
})
export class MonsterService{
    constructor(private http: HttpClient){}

    private monstersUrl = "https://localhost:7107/api/monsters";

    getMonsters(): Observable<Monster[]>{
        return this.http.get<Monster[]>(this.monstersUrl);
    }
}
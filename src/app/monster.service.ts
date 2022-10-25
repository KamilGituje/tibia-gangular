import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiPaths } from "src/environments/ApiPaths";
import { environment } from "src/environments/environment";
import { Monster } from "./monster";

@Injectable({
    providedIn: "root"
})
export class MonsterService{
    constructor(private http: HttpClient){}

    private baseUrl = environment.baseUrl;

    getMonsters(): Observable<Monster[]>{
        return this.http.get<Monster[]>(`${this.baseUrl}/${ApiPaths.monster}`);
    }
}
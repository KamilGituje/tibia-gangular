import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiPaths } from "src/environments/ApiPaths";
import { environment } from "src/environments/environment";
import { Npc } from "./npc";
import { NpcWithItems } from "./npc-with-items";

@Injectable({
    providedIn: "root"
})
export class NpcService {
    constructor(private http: HttpClient) { }
    private baseUrl = environment.baseUrl;

    getNpcs(): Observable<Npc[]> {
        return this.http.get<Npc[]>(`${this.baseUrl}/${ApiPaths.npc}`);
    }
    getNpcWithItems(npcId: number): Observable<NpcWithItems> {
        return this.http.get<NpcWithItems>(`${this.baseUrl}/${ApiPaths.npc}/${npcId}`);
    }
}
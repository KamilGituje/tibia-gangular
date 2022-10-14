import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Npc } from "./npc";
import { NpcWithItems } from "./npc-with-items";

@Injectable({
providedIn: "root"
})
export class NpcService{
constructor(private http: HttpClient){}
private npcsUrl = "https://localhost:7107/api/npcs";

getNpcs(): Observable<Npc[]>{
    return this.http.get<Npc[]>(this.npcsUrl);
}
getNpcWithItems(npcId: number): Observable<NpcWithItems>{
    return this.http.get<NpcWithItems>(`${this.npcsUrl}/${npcId}`);
}
}
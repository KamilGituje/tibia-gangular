import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { CharacterService } from "./character.service";
import { GameComponent } from "./game.component";
import { Item } from "./item";
import { Monster } from "./monster";
import { MonsterService } from "./monster.service";
import { SellItemComponent } from "./sellitem.component";

@Component({
    templateUrl: "./exp.component.html",
    selector: "pm-exp",
    styleUrls: ["./exp.component.css"]
})
export class ExpComponent {
    constructor(private monsterService: MonsterService, private characterService: CharacterService) { }
    sub: Subscription;
    monsters: Monster[] = [];
    loot: Item[];

    onClick(monster: Monster) {
        this.sub = this.characterService.killMonster(monster.monsterId).subscribe({
            next: loot => this.loot = loot
        });
    }
    ngOnInit() {
        this.sub = this.monsterService.getMonsters().subscribe({
            next: monsters => this.monsters = monsters
        });
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
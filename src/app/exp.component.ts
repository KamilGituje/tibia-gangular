import { Component } from "@angular/core";
import { CharacterService } from "./character.service";
import { Item } from "./item";
import { Monster } from "./monster";
import { MonsterService } from "./monster.service";

@Component({
    templateUrl: "./exp.component.html",
    selector: "pm-exp",
    styleUrls: ["./exp.component.css"]
})
export class ExpComponent {
    constructor(private monsterService: MonsterService, private characterService: CharacterService) { }
    ngOnInit() {
        this.monsterService.getMonsters().subscribe({
            next: monsters => this.monsters = monsters
        });
    }

    monsters: Monster[] = [];
    loot: Item[];

    onClick(monster: Monster) {
        this.characterService.killMonster(monster.monsterId).subscribe({
            next: loot => this.loot = loot
        });
    }
}
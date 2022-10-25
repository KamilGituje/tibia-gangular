import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CharacterService } from "./character.service";

@Component({
    templateUrl: "./game.component.html",
    styleUrls: ["./game.component.css"]
})
export class GameComponent {
    constructor(private router: Router, private characterService: CharacterService) { }

    ngOnInit() {
        if (!this.characterService.characterId) {
            this.characterService.characterId = Number(localStorage.getItem("CharacterId"));
            if (!this.characterService.characterId) {
                this.router.navigate(["/playgame"])
            }
        }
    }
}
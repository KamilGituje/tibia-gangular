import { Component } from "@angular/core";
import { CharacterService } from "./character.service";
import { Character } from "./character";
import { Router } from "@angular/router";
import { SecurityService } from "./security/security.service";

@Component({
    templateUrl: "./select-character.component.html",
    selector: "pm-login",
    styleUrls: ["./select-character.component.css"]
})
export class SelectCharacterComponent {
    constructor(private characterService: CharacterService, private securityService: SecurityService, private router: Router) { }
    ngOnInit() {
        const userId: string = this.securityService.auth.userId;
        this.characterService.getCharactersForUser(userId).subscribe({
            next: characters => this.characters = characters
        })
    }

    characters: Character[];

    onSubmit(characterId: number) {
        this.characterService.characterId = characterId;
        localStorage.setItem("CharacterId", String(characterId));
        this.router.navigate(["/game"]);
    }
}
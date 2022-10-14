import { Component } from "@angular/core";
import { Subscription } from "rxjs";
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
    sub: Subscription;
    characters: Character[];
    characterId: number;
    wrongId: boolean = false;
    onSubmit(characterId: number) {
        this.characterService.characterId = characterId;
        this.router.navigate(["/game"]);
    }

    ngOnInit() {
        let userId: string = this.securityService.auth.userId;
        this.sub = this.characterService.getCharactersForUser(userId).subscribe({
            next: characters => this.characters = characters
        })
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
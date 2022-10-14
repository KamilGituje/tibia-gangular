import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Character } from "./character";
import { CharacterService } from "./character.service";
import { CharacterForCreation } from "./characterForCreation";
import { UserAuth } from "./security/app-user-auth";
import { SecurityService } from "./security/security.service";

@Component({
    selector: "pm-create-character",
    templateUrl: "./create-character.component.html",
    styleUrls: ["./create-character.component.css"]
})
export class CreateCharacterComponent {
    constructor(private characterService: CharacterService, private securityService: SecurityService) { }
    character: CharacterForCreation = new CharacterForCreation();
    characterResponse: Character = new Character();
    submitted: boolean = false;
    sub: Subscription;

    onSubmit() {
        this.sub = this.characterService.createCharacter(this.character, this.securityService.auth.userId).subscribe({

            next: character => {
                this.characterResponse = character;
                if (character !== null) {
                    this.submitted = true;
                }
            }
        })
    }

    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
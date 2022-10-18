import { Component } from "@angular/core";
import { Character } from "./character";
import { CharacterService } from "./character.service";
import { CharacterForCreation } from "./characterForCreation";
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

    onSubmit() {
        this.characterService.createCharacter(this.character, this.securityService.auth.userId).subscribe({
            next: character => {
                this.characterResponse = character;
                if (character !== null) {
                    this.submitted = true;
                }
            }
        })
    }
}
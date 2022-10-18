import { Component } from "@angular/core";
import { Character } from "./character";
import { CharacterService } from "./character.service";

@Component({
    templateUrl: "./highscores.component.html",
    styleUrls: ["./highscores.component.css"]
})
export class HighscoresComponent {
    constructor(private characterService: CharacterService) { }
    ngOnInit() {
        this.characterService.getCharactersPaged(this.page).subscribe({
            next: characters => this.characters = characters
        })
    }

    characters: Character[] = [];
    page: number = 1;

    changePage(pageNumber: number) {
        this.page = pageNumber;
        this.characterService.getCharactersPaged(this.page).subscribe({
            next: characters => this.characters = characters
        });
    }
}
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { Character } from "./character";
import { CharacterService } from "./character.service";

@Component({
    templateUrl: "./highscores.component.html",
    styleUrls: ["./highscores.component.css"]
})
export class HighscoresComponent {
    constructor(private characterService: CharacterService) { }
    characters: Character[] = [];
    sub: Subscription;
    page: number = 1;
    nextPageExists: boolean = false;

    changePage(pageNumber: number) {
        this.page = pageNumber;
        this.sub = this.characterService.getCharactersPaged(this.page).subscribe({
            next: characters => this.characters = characters
        });
    }
    ngOnInit() {
        this.sub = this.characterService.getCharactersPaged(this.page).subscribe({
            next: characters => this.characters = characters
        })
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
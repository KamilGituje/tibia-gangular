import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { CharacterService } from "./character.service";
import { Item } from "./item";

@Component({
    templateUrl: "./backpack.component.html",
    selector: "pm-backpack",
    styleUrls: ["./backpack.component.css"]
})
export class BackpackComponent {
    constructor(private characterService: CharacterService) { }
    sub: Subscription;
    items: Item[];

    ngOnInit() {
        this.sub = this.characterService.getItemsInBp().subscribe({
            next: items => this.items = items
        })
    }
}
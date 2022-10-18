import { Component } from "@angular/core";
import { CharacterService } from "./character.service";
import { ItemWithPrice } from "./item-with-price";
import { Npc } from "./npc";
import { NpcService } from "./npc.service";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar"
import { _isNumberValue } from "@angular/cdk/coercion";

@Component({
    templateUrl: "./sellitem.component.html",
    selector: "pm-sellitem",
    styleUrls: ["sellitem.component.css"]
})
export class SellItemComponent {
    constructor(private npcService: NpcService, private characterService: CharacterService, private snackBar: MatSnackBar) { }
    ngOnInit() {
        this.npcService.getNpcs().subscribe({
            next: npcs => this.npcs = npcs
        })
    }

    npcs: Npc[];
    npcId: number;
    items: ItemWithPrice[];

    onClickNpc(npcId: number) {
        this.npcId = npcId;
        this.npcService.getNpcWithItems(npcId).subscribe({
            next: npc => this.items = npc.items
        })
    }
    onClickItem(itemId: number, itemName: string) {
        this.characterService.sellItem(this.npcId, itemId).subscribe({
            next: price => {
                this.openSnackBar(`Sprzedano ${itemName} za ${price}`, true)
            },
            error: err => {
                this.openSnackBar(`Nie posiadasz ${itemName}`, false)
            }
        })
    }
    openSnackBar(message: string, itemSold: boolean) {
        if (itemSold) {
            this.snackBar.open(message, "zamknij", this.snackBarConfig);
        }
        else {
            this.snackBar.open(message, "zamknij");
        }
    }
    snackBarConfig: MatSnackBarConfig = {
        panelClass: "item-sold"
    }
}
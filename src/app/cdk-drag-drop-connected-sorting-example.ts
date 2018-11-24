import { Component, Inject } from '@angular/core';
import { City, CityMaker } from './city'
import { CardColors,  CardMap } from './cardColors.enum'
import { DiscardPile } from './discard-pile';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})

export class CdkDragDropConnectedSortingExample {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCityDialog, {
      width: '250px', height: '350px', position: {
        top: '100px',
        left: '450px',
      },
      data: CityMaker.create("","")
    });

    dialogRef.afterClosed().subscribe(result => {      
      this.infectionDeck.push(result);
    });
  }

  infectionDeck: City[] = [
    CityMaker.create("NEW YORK", CardColors.BLUE),
    CityMaker.create("DENVER", CardColors.BLUE),
    CityMaker.create("JACKSONVILLE", CardColors.YELLOW),
    CityMaker.create("TRIPOLI", CardColors.BLACK),
    CityMaker.create("NEW YORK", CardColors.BLUE),
    CityMaker.create("NEW YORK", CardColors.BLUE),
    CityMaker.create("BEIJING", CardColors.RED)
  ];

  firstDiscardPile: City[] = [
    CityMaker.create(" ", CardColors.EPIDEMIC)
  ];

  private _discardPile: DiscardPile = new DiscardPile(7);
  public get discardPile(): DiscardPile {
    return this._discardPile;
  }
  public set discardPile(value: DiscardPile) {
    this._discardPile = value;
  }


}

@Component({
  selector: 'add-city-dialog',
  templateUrl: 'add-city-dialog.html',
})
export class AddCityDialog {

  constructor(
    public dialogRef: MatDialogRef<AddCityDialog>,
    @Inject(MAT_DIALOG_DATA) public data: City) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  cards: CardMap[] = [
    { value: '1BlueInfectionCard.png', viewValue: 'BLUE' },
    { value: '2YellowInfectionCard.png', viewValue: 'YELLOW' },
    { value: '3BlackInfectionCard.png', viewValue: 'BLACK' },
    { value: '4RedInfectionCard.png', viewValue: 'RED' }
  ];
}
import { Component } from '@angular/core';
import { City, CityMaker } from './city'
import { CardColors } from './cardColors.enum'
import { DiscardPile } from './discard-pile';
/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-example.css'],
})

export class CdkDragDropConnectedSortingExample {

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
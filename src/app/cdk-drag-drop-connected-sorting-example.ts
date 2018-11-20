import { Component } from '@angular/core';
import { ICity } from './city'
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

  infectionDeck: ICity[] = [
    {
      "name": 'NEW YORK',
      "color": CardColors.BLUE
    },
    {
      "name": 'DENVER',
      "color": CardColors.BLUE
    },
    {
      "name": 'NEW YORK',
      "color": CardColors.BLUE
    },
    {
      "name": 'JACKSONVILLE',
      "color": CardColors.YELLOW
    },
    {
      "name": 'NEW YORK',
      "color": CardColors.BLUE
    },
    {
      "name": 'TRIPOLI',
      "color": CardColors.BLACK
    },
    {
      "name": 'BEIJING',
      "color": CardColors.RED
    }

  ];

  private _discardPile: DiscardPile = new DiscardPile(8);
  public get discardPile(): DiscardPile {
    return this._discardPile;
  }
  public set discardPile(value: DiscardPile) {
    this._discardPile = value;
  }
}
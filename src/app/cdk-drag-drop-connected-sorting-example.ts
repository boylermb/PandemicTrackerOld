import { Component } from '@angular/core';
import { City } from './city'
import { CardColors } from './cardColors.enum'
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

}
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { City } from '../city'
import { CardColors } from '../cardColors.enum'

@Component({
  selector: 'app-drag-drop-container',
  templateUrl: './drag-drop-container.component.html',
  styleUrls: ['./drag-drop-container.component.css']
})
export class DragDropContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  discardPile: City[] = [
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

  drop(event: CdkDragDrop<City[]>) {
    if (event.previousContainer === event.container) {
      event.container.data.sort((a, b) => {
        if (a.color > b.color) {
          return 1;
        }
        if (a.color < b.color) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }

        return 0;
      })
      //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }

  }
}

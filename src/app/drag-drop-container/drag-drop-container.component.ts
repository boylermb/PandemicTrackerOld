import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { ICity } from '../city'
import { CardColors } from '../cardColors.enum'

@Component({
  selector: 'app-drag-drop-container',
  templateUrl: './drag-drop-container.component.html',
  styleUrls: ['./drag-drop-container.component.css']
})
export class DragDropContainerComponent implements OnInit {

  @Input() infectionDeck: ICity[]

  ngOnInit() {
  }  

  drop(event: CdkDragDrop<ICity[]>) {
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

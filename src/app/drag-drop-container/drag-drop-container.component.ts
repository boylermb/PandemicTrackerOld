import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { City } from '../city'

@Component({
  selector: 'app-drag-drop-container',
  templateUrl: './drag-drop-container.component.html',
  styleUrls: ['./drag-drop-container.component.css']
})
export class DragDropContainerComponent implements OnInit {

  @Input() infectionDeck: City[]

  ngOnInit() {
  }  

  drop(event: CdkDragDrop<City[]>) {
    if (event.previousContainer === event.container) {
      this.SortCities(event.container.data);      
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      this.SortCities(event.container.data);   
    }   

  }
  private SortCities(cities: City[]){
    cities.sort((a, b) => {
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
}
}

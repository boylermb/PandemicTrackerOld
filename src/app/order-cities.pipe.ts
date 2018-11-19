import { Pipe, PipeTransform } from '@angular/core';

import { City } from './city';

@Pipe({ name: 'OrderedCities' })
export class OrderCitiesPipe implements PipeTransform {
  transform(cityList: City[]) {
    return cityList.sort((a, b) => {
      if (a.color > b.color || a.name < b.name) {
        return 1;
      }
      if (a.color < b.color || a.name > b.name) {
        return -1;
      }
      return 0;
    })
  }
}

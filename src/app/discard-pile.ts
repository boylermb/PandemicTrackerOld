import { City, CityMaker } from './city'
import { CardColors } from './cardColors.enum';

export class DiscardPile {
    constructor(numberOfEpidemics : number){
        this.epidemicGroups = new Array<City[]>();
        for (var _i = 0; _i < numberOfEpidemics; _i++)
        {            
            this.epidemicGroups.push([CityMaker.create(" ", CardColors.EPIDEMIC)]);
        }

    }
    epidemicGroups : Array<City[]>

}

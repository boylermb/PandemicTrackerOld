import { ICity } from './city'
import { CardColors } from './cardColors.enum';

export class DiscardPile {
    constructor(numberOfEpidemics : number){
        this.epidemicGroups = new Array<ICity[]>();
        for (var _i = 0; _i < numberOfEpidemics; _i++)
        {            
            this.epidemicGroups.push(this.newEpidemic);
        }

    }
    epidemicGroups : Array<ICity[]>

    newEpidemic : ICity[] = [
        {
            name : " ",
            color : CardColors.EPIDEMIC
        }
    ]
    addEpidemic(index : number){
        
    }
}

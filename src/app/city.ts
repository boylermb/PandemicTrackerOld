
export class City {
  constructor(public name: string, public color: string) {}
}

export class CityMaker {
  static create(name: string, color: string){
    return { name : name, color : color};
  }
}
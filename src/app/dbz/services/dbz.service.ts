import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Injectable({

  providedIn: 'root'
})
export class DbzService {


  public characters: Character[] = [{
    name: 'Krilling',
    power: 500
},{
    name: 'Goku',
    power: 9300
}, {
    name: 'Vegeta',
    power: 7500
}];

  onNewCharacter(character: Character):void {
   this.characters.push(character);
}
  onDeleteddCharacter( index: number ) {
    this.characters.splice (index,1);

  }

}

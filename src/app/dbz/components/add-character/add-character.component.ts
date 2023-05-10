import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
public onNewCharacter: EventEmitter<Character> =new EventEmitter();


  public characterre: Character = {
    name: '',
    power: 0
  };

  emitCharacterr():void {

    if (this.characterre.name.length === 0) return;

    this.onNewCharacter.emit(this.characterre);

    this.characterre = { name: '', power:0} ;


  }
}


 import {Component, Input} from '@angular/core';
 import {Character} from '../models/character';
 
 @Component({
  selector: 'characters-list-item-component',
 templateUrl: 'app/characters-list-item-component/characters-list-item-component.html'
 })
 export class CharactersListItemComponent {
   @Input() character: Character;
 }
import {upgradeAdapter} from './upgrade-adapter';
import {CharactersListItemComponent} from './characters-list-item-component/characters-list-item-component';
 
 declare let angular: any;
 
 angular.module('characters-list-item-component', [])
       .directive('charactersListItemComponent', upgradeAdapter.downgradeNg2Component(CharactersListItemComponent));
angular
  .module('characters-list-component', ['ngRoute', 'characters-service', 'characters-list-item-component'])
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      template: '<characters-list-component></characters-list-component>'
    });
  })
  .component('charactersListComponent', {
    templateUrl: 'app/characters-list-component/characters-list-component.html',
    controller: function (charactersService) {
      this.characters = charactersService.getcharacters();
    },
});

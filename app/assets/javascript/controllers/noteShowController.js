angular.module('NoteWrangler').controller('NotesShowController', function(Note, $scope, $routeParams, $location){
  $scope.note = Note.get({id: $routeParams.id});

  $scope.deleteNote = function(note){
    note.$remove().then(function(){
      $location.path('/notes');
    });
  }
});
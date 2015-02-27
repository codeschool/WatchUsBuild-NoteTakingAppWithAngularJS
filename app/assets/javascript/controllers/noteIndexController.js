angular.module('NoteWrangler').controller('NotesIndexController', function(Note, $scope){
  $scope.notes = Note.query();
  $scope.search = {};
});
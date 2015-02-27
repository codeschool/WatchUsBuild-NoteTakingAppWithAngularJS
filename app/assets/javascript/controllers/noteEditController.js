angular.module('NoteWrangler').controller('NotesEditController', function($scope,User, Note, Category, $routeParams, $location){
  $scope.note = Note.get({id: $routeParams.id})
  $scope.isSubmitting = false;
  $scope.categories = Category.query();
  $scope.users = User.query();

  $scope.saveNote = function(note){
    $scope.isSubmitting = true;

    note.$update().finally(function(){
      $scope.isSubmitting = false;
      $location.path("/notes/" + note.id);
    });
  }
});
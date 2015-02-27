angular.module('NoteWrangler').factory('Category', function($resource){
  return $resource('/categories/:id');
});
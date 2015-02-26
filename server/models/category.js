var _ = require('lodash');

var categories = [
  {"id": 1, "name": "Testing"},
  {"id": 2, "name": "Personal Note"},
  {"id": 3, "name": "Bash"},
  {"id": 4, "name": "Idea"},
  {"id": 5, "name": "Use with Caution"},
  {"id": 6, "name": "Question"},
  {"id": 7, "name": "Best Practice"},
  {"id": 8, "name": "Code Snippet"}
]

module.exports = {
  get: function(id) {
    return _.find(categories, function(category){
      return category.id === id;
    });
  },
  all: function() {
    return categories;
  }
}
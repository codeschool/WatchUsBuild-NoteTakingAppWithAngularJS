module.exports = function(app) {
  // Return a list of available node types
  app.get('/categories', function(req, res) {
    res.json([
      {"id": 1, "name": "Testing", "icon": "tumblr"},
      {"id": 2, "name": "Personal Note", "icon": "pencil"},
      {"id": 3, "name": "Bash", "icon": "terminal"},
      {"id": 4, "name": "Idea", "icon": "lightbulb"},
      {"id": 5, "name": "Use with Caution","icon": "warning"},
      {"id": 6, "name": "Question", "icon": "question"},
      {"id": 7, "name": "Best Practice","icon": "thumbs up outline"},
      {"id": 8, "name": "Code Snippet", "icon": "code"}
    ]);
  });
};
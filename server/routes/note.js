var _ = require('lodash');
var Note = require('../models/note')

module.exports = function(app) {
  app.get('/notes', function(req, res) {
    res.json(Note.all());
  });

  app.post('/notes', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Note.create(req.body));
    }, 1000);
  });

  app.put('/notes/:id', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Note.update(req.body));
    },1000)
  });

  app.get('/notes/:id', function(req, res) {
    var noteId = parseInt(req.param('id'), 10);
    res.json(Note.get(noteId) || {});
  });

  app.delete('/notes/:id', function(req, res) {
    res.json(Note.delete(parseInt(req.param('id'), 10)) || {});
  });
};

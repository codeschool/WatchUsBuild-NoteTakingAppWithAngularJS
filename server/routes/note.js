var _ = require('lodash');
var Note = require('../models/note')

module.exports = function(app) {
  app.get('/notes', function(req, res) {
    res.json(Note.all());
  });

  app.post('/notes', function(req, res) {
    res.json(Note.create(req.body));
  });

  app.put('/notes', function(req, res) {
    res.json(Note.update(req.body));
  });

  app.get('/notes/:id', function(req, res) {
    var noteId = parseInt(req.param('id'), 10);
    res.json(Note.get(noteId) || {});
  });

  app.delete('/notes/:id', function(req, res) {
    var noteId = parseInt(req.param('id'), 10);
    res.json(Note.delete(noteId) || {});
  });
};

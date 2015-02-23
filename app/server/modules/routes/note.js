var notes = [
  {"id":1 ,"UserId": 13, "CategoryId": 8, "link" :"https://www.youtube.com/watch?feature=player_detailpage&v=ZhfUv0spHCY#t=1870", "description": "NgModel Best Practice", "content" : "Always use dot syntax when using NgModel! Treat Scope as read-only in templates & write-only in controllers. The purpose of the scope is to refer to the model, not be the model. The model is your javascript objects. When doing bidirectional binding with ngModel make sure you don't bind directly to the scope properties. This will cause unexpected behavior in the child scopes.", "title" : "NgModel BP", "icon" : "basic info"}
  {"id":2 ,"UserId": 2, "CategoryId": 3, "link" : "https://docs.angularjs.org/api/ng#directive", "description" : "Markers on a **DOM element** that tell AngularJS's HTML compiler `$compile` to attach a specified behavior to that DOM element.", "title" : "Directives", "icon" : "code", "content": "Markers on a **DOM element**"}
  {"id":3 ,"UserId": 7, "CategoryId": 6, "link" : "", "description" : "Clarify the confusion between Service the term and `service` the angular method and to explain the 5 different Service recipes in Angular.", "title" : "Service Service? Really Angular?","content": "There are 5 Recipes used to create a Service. One of those *was* unfortunately named, Service. So yes, amongst its fellow peers such as Provider Service and Factory Service, there is in fact a Service Service.", "icon" : "question"}
  {"id":4 ,"UserId": 7, "CategoryId": 6, "link" : "", "description" : "QUESTIONABLE DESCRIPTION GOES HERE", "title" : "TEST TEST TEST", "content": "QUESTIONABLE CONTENT GOES HERE", "icon" : "question"}
  {"id":5 ,"UserId": 7, "CategoryId": 6, "link" : "", "description" : "Define Service", "title" : "What is a Service", "content": "Service: Angular services are objects that are wired together using dependency injection (DI). You can use services to organize and share code across your app.", "icon" : "question"}
  {"id":6 ,"UserId": 7, "CategoryId": 6, "description" : "Steps for Creating a Service", "title" : "How do you create a Service?", "content": "You can register a service to our Angular module `app` with a one of the following 5 recipes: \\n 	- **factory**  \\n 	- **provider**  \\n 	- **service**  \\n 	- **value**  \\n 	- **constant** ", "icon" : "question"});
]

var lastId = 6;

module.exports = function(app) {
  app.get('/notes', function(req, res) {
    res.json(notes);
  });

  app.post('/notes', function(req, res) {
    var newNote = {id: lastId+=1}; //, UserId: null, CategoryId: req.param('CategoryId'), link: req.param('link'), title: req.param('title'), content: req.param('content'), description: req.param('description'), icon: req.param('icon')};

    _.assign(newNote, req.param('note')
    notes.push(newNote);
    res.json(newNote);
  });

  app.put('/notes', function(req, res) {
    var noteId = parseInt(req.param('id'), 10);
    var selectedNote = _.find(notes, function(note){
      return note.id === noteId;
    });

    if(selectedNote) {
      _.assign(selectedNote, req.param('note'));
    }

    res.json(selectedNote);
  });

  app.get('/notes/:id', function(req, res) {
    var noteId = parseInt(req.param('id'), 10);
    var selectedNote = _.result(_.find(notes, function(note){
      return note.id === noteId;
    }), {});

    res.json(selectedNote);
  });
};

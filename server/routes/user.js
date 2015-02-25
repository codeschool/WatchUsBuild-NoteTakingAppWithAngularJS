var _ = require('lodash');

var users = [
  {"id": 1, "username": "zeldman", "name": "Jeffery Zeldman", "bio": "Founder, Happy Cog studios. Author, Designing With Web Standards. Publisher, A List Apart, A Book Apart.", "twitter_handle": "@zeldman", "site": "zeldman.com"},
  {"id": 2, "username": "b_green", "name": "Brad Green", "bio": "I work at Google where I manage AngularJS and Google's internal sales productivity applications. I'm a dad.", "twitter_handle": "@bradlygreen", "site": "google.com/+BradGreen"},
  {"id": 3, "username": "Meyer the Eric", "name": "Eric A. Meyer", "bio": "Web standards | (X)HTML | CSS | microformats | community | writing | speaking | signing man.", "twitter_handle": "@meyerweb", "site": "meyerweb.com"},
  {"id": 4, "username": "GP", "name": "Gregg Pollack", "bio": "Founder of Envy Labs, Code School, Orlando Ruby Users Group, BarCamp Orlando, and the Orlando Tech Events newsletter.", "twitter_handle": "@greggpollack", "site": "EnvyLabs.com"},
  {"id": 5, "username": "r_higley", "name": "Rachel Higley", "bio": "A web developer located in central florida", "twitter_handle": "@RachelHigley", "site": ""},
  {"id": 6, "username": "zach", "name": "Zachary Nicoll", "bio": "Bio sections always intimidate me. I can never think of anything to say that will achieve that awe inspiring effect I want it to have.", "twitter_handle": "@turtleguyy", "site": "zacharynicoll.com"},
  {"id": 7, "username": "renz", "name": "Adam Rensel","bio": "Web Developer at @envylabs and @codeschool", "twitter_handle": "@adamrensel", "site": "adamrensel.com"},
  {"id": 8, "username": "ItsThrillhouse", "name": "Jason Millhouse", "bio": "Course builder. Aspiring writer. Comp Sci guy. Teacher. Sweetfiend. Corgi lover. Gamer who doesn't. Pro Series host. Voice of the UCF Marching Knights. Dork.", "twitter_handle": "@ItsThrillhouse", "site": ""},
  {"id": 9, "username": "OlivierLacan","name": "Olivier Lacan","bio": "Software bricoleur at @codeschool, word wrangler, scientific skeptic, and logic lumberjack.","twitter_handle": "@olivierlacan","site": "olivierlacan.com"},
  {"id": 10, "username": "theSmith", "name": "Andrew Smith", "bio": "iOS & Web Developer at @intelity. @fullsail graduate.", "twitter_handle": "@fullsailor", "site": "fullsailor.com"},
  {"id": 11, "username": "DrewBarontini", "name": "Drew Barontini", "bio": "Front-end developer @codeschool, descendant of @envylabs, real-life extrovert, internet introvert.", "twitter_handle": "@drewbarontini", "site": "drewbarontini.com"},
  {"id": 12, "username": "JordanWade", "name": "Jordan Wade", "bio": "Designer, Illustrator, and Front-End Developer @codeschool", "twitter_handle": "@jjordanwade", "site": "jamesjordanwade.com"},
  {"id": 13, "username": "AlyssaNicoll", "name": "Alyssa Nicoll", "bio": "Code School Teacher. Angular Lover. Scuba Diver.", "twitter_handle": "@AlyssaNicoll", "site": "alyssa.io"}
];

module.exports = function(app){
  app.get('/users', function(req, res){
    res.json(users);
  });

  app.get('/users/:id', function(req, res){
    var userId = parseInt(req.params.id, 10);

    var selectedUser = _.find(users, function(user){
      return user.id === userId;
    });

    res.json(selectedUser || {});
  });
};

var _ = require('lodash');

var users = [
  {"id": 1,  "email": "jeffrey@zeldman.com", "username": "zeldman", "name": "Jeffrey Zeldman", "bio": "Founder, Happy Cog studios. Author, Designing With Web Standards. Publisher, A List Apart, A Book Apart.", "twitter_handle": "@zeldman", "site": "zeldman.com"},
  {"id": 2,  "email": "brad@bradly.com", "username": "b_green", "name": "Brad Green", "bio": "I work at Google where I manage AngularJS and Google's internal sales productivity applications. I'm a dad.", "twitter_handle": "@bradlygreen", "site": "google.com/+BradGreen"},
  {"id": 3,  "email": "", "username": "Meyer the Eric", "name": "Eric A. Meyer", "bio": "Web standards | (X)HTML | CSS | microformats | community | writing | speaking | signing man.", "twitter_handle": "@meyerweb", "site": "meyerweb.com"},
  {"id": 4,  "email": "gregg@codeschool.com", "username": "GP", "name": "Gregg Pollack", "bio": "Founder of Envy Labs, Code School, Orlando Ruby Users Group, BarCamp Orlando, and the Orlando Tech Events newsletter.", "twitter_handle": "@greggpollack", "site": "EnvyLabs.com"},
  {"id": 5,  "email": "me@rachelhigley.com", "username": "r_higley", "name": "Rachel Higley", "bio": "A web developer located in central florida", "twitter_handle": "@RachelHigley", "site": ""},
  {"id": 6,  "email": "mail@zdn.me", "username": "zach", "name": "Zachary Nicoll", "bio": "Bio sections always intimidate me. I can never think of anything to say that will achieve that awe inspiring effect I want it to have.", "twitter_handle": "@turtleguyy", "site": "zacharynicoll.com"},
  {"id": 7,  "email": "adamrensel@codeschool.com", "username": "renz", "name": "Adam Rensel","bio": "Web Developer at @envylabs and @codeschool", "twitter_handle": "@adamrensel", "site": "adamrensel.com"},
  {"id": 9,  "email": "olivier@codeschool.com", "username": "OlivierLacan","name": "Olivier Lacan","bio": "Software bricoleur at @codeschool, word wrangler, scientific skeptic, and logic lumberjack.","twitter_handle": "@olivierlacan","site": "olivierlacan.com"},
  {"id": 11, "email": "drew@codeschool.com",  "username": "DrewBarontini", "name": "Drew Barontini", "bio": "Front-end developer @codeschool, descendant of @envylabs, real-life extrovert, internet introvert.", "twitter_handle": "@drewbarontini", "site": "drewbarontini.com"},
  {"id": 12, "email": "jordan@codeschool.com",  "username": "JordanWade", "name": "Jordan Wade", "bio": "Designer, Illustrator, and Front-End Developer @codeschool", "twitter_handle": "@jjordanwade", "site": "jamesjordanwade.com"},
  {"id": 13, "email": "alyssa@codeschool.com",  "username": "AlyssaNicoll", "name": "Alyssa Nicoll", "bio": "Code School Teacher. Angular Lover. Scuba Diver.", "twitter_handle": "@AlyssaNicoll", "site": "alyssa.io"}
];

module.exports = {
  get: function(id) {
    return _.find(users, function(user){
      return user.id === id;
    });
  },
  all: function() {
    return users;
  }
}
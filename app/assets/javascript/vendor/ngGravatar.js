angular.module('ngGravatar', []);
angular.module('ngGravatar').directive("gravatar", function(Gravatar){
  return {
    replace: true,
    restrict: "E",
    template: "<img ng-src='{{gravatarUrl()}}'>",
    scope: {email: "="},
    link: function(scope){
      scope.gravatarUrl = function(){
        return Gravatar(scope.email);
      }
    }
  };
});

angular.module('ngGravatar').provider('Gravatar', function(){
  var imageSize = 50;
  var url = "http://www.gravatar.com/avatar/"

  this.setSize = function(value) {
    imageSize = value;
  }

  this.$get = function(){
    return function(email){
      return url + CryptoJS.MD5(email) + "?size=" + imageSize.toString();
    }
  }
});
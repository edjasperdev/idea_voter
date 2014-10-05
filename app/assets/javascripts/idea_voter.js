window.IdeaVoter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new IdeaVoter.Routers.Ideas();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  IdeaVoter.initialize();
});



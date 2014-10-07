IdeaVoter.Models.Idea = Backbone.Model.extend({
	urlRoot: '/ideas',

	defaults: function() {
      return {
        votes: 0
      }
    },


});

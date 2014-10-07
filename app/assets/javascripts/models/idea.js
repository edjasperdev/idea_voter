IdeaVoter.Models.Idea = Backbone.Model.extend({
	urlRoot: '/ideas',

	defaults: function() {
      return {
        votes: 0
      }
    },
		upvote: function(){

		this.set({"votes": + 1}),
		this.save();
	}

});

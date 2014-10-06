IdeaVoter.Routers.Ideas = Backbone.Router.extend({
	routes: {
		'': 'index',
		'ideas/:id' : 'show'  
	},

	initialize: function(){
		this.collection = new IdeaVoter.Collections.Ideas
		this.collection.fetch();
	},
	

	index: function() {
		var view = new IdeaVoter.Views.IdeasIndex({collection: this.collection})
		$('#container').html(view.render().el);
	},

	show: function(id) {
	alert("You're on idea #" + id );
	}

});



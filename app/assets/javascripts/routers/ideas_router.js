IdeaVoter.Routers.Ideas = Backbone.Router.extend({
	routes: {
		'': 'index',
		'ideas/:id' : 'show'  
	},

	index: function() {
		var view = new IdeaVoter.Views.IdeasIndex()
		$('#container').html(view.render().el);
	},

	show: function(id) {
	alert("You're on idea #" + id );
	}

});



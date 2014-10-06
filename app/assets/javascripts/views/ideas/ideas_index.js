IdeaVoter.Views.IdeasIndex = Backbone.View.extend({
	render: function() {
    this.renderTemplate();
    return this;
	},

	renderTemplate: function() {
    this.$el.html(HandlebarsTemplates['ideas/index'])
	}
});

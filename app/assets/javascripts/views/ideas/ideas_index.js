IdeaVoter.Views.IdeasIndex = Backbone.View.extend({
	initialize: function() {
    this.collection.on('reset', this.render);
	},

	render: function() {
    this.renderTemplate(this.collection);
    return this;
	},



	renderTemplate: function() {
    this.$el.html(HandlebarsTemplates['ideas/index']({ collection: this.collection }))
	}
});

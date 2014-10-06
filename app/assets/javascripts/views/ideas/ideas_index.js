IdeaVoter.Views.IdeasIndex = Backbone.View.extend({

	template: HandlebarsTemplates['ideas/index'],
	initialize: function(){
    this.collection.on('reset',this.render, this);
     },
  render: function(){
    $(this.el).html(this.template({collection: this.collection}));    
    return this;
  }

});

// 	initialize: function() {
//     this.collection.on('change', this.render, this);
// 	},

// 	render: function() {
//     this.renderTemplate(this.collection);
//     return this;
// 	},


// 	renderTemplate: function() {
//     this.$el.html(HandlebarsTemplates['ideas/index']({ collection: this.collection }))
// 	}
// });



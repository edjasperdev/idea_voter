IdeaVoter.Views.Idea = Backbone.View.extend({

	template: HandlebarsTemplates['ideas/idea'],
 
  render: function(){
    $(this.el).html(this.template({idea: this.model}));    
    return this;
  },
});

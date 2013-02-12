(function(Backbone) {
  
  TalkThatTalk.Views.OrganizationDashboardSuggestionsView = Backbone.View.extend({
    tagName:  'div',

    template: JST["backbone/templates/organization_dashboard_suggestions"],

    events: {
      'click #add_suggestion_btn' : 'add_suggestion_clicked'
    },

    initialize: function(options) {
      this.suggestions = options.suggestions || [];
    },

    add_suggestion_clicked: function() {
      TalkThatTalk.OrganizationDashboardRouter.navigate('new_suggestion', {trigger: true});
    },

    render: function() {
      this.$el.html(this.template());
      var table = this.$el.find('#suggestion_table');
      _.each(this.suggestions, function(item) {
        var item_view = new TalkThatTalk.Views.OrganizationDashboardSuggestionView({suggestion: item});
        table.append(item_view.render().el);
      });
      return this;
    }
  });

}(Backbone));
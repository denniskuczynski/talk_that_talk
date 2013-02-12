(function() {
  
  TalkThatTalk.Views.OrganizationDashboardView = Backbone.View.extend({
    tagName:  'div',

    initialize: function(options) {
      this.talks_view = new TalkThatTalk.Views.OrganizationDashboardTalksView({talks: options.talks});
      this.suggestions_view = new TalkThatTalk.Views.OrganizationDashboardSuggestionsView({suggestions: options.suggestions});
    },

    remove: function(options) {
      alert('dash remove');
    },

    render: function() {
      this.$el.html(this.talks_view.render().el);
      this.$el.append(this.suggestions_view.render().el);
      return this;
    }
  });

}());
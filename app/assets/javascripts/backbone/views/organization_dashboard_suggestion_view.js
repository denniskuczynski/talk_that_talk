(function() {
  
  TalkThatTalk.Views.OrganizationDashboardSuggestionView = Backbone.View.extend({
    tagName:  'tr',
    className: 'dataRow',

    template: JST["backbone/templates/organization_dashboard_suggestion"],

    events: {
      'click .vote-for-suggestion' : 'vote_for_suggestion_clicked'
    },

    initialize: function(options) {
      this.suggestion = options.suggestion;
    },

    vote_for_suggestion_clicked: function() {
    },

    render: function() {
      this.$el.html(this.template({suggestion: this.suggestion}));
      return this;
    }
  });

}());
(function() {
  
  TalkThatTalk.Views.OrganizationDashboardSuggestionsView = Backbone.View.extend({
    tagName:  'div',

    template: JST["backbone/templates/organization_dashboard_suggestions"],

    events: {
      'click #add_suggestion_btn' : 'add_suggestion_clicked'
    },

    initialize: function(options) {
      this.organization_id = options.organization_id;
      this.suggestions = options.suggestions;
      this.suggestions.on('reset', this.renderItems, this);
    },

    pager_success: function(collection, response) {
      console.log("Suggestions pager success");
      console.log(collection);
      console.log(response);
      console.log(this.suggestions);
    },

    pager_error: function(collection, response) {
      console.log("Suggestions pager error");
      console.log(collection);
      console.log(response);
      console.log(this.suggestions);
    },

    add_suggestion_clicked: function() {
      TalkThatTalk.OrganizationDashboardRouter.navigate('new_suggestion', {trigger: true});
    },

    render: function() {
      this.$el.html(this.template());
      this.suggestions.pager({success: this.pager_success, error: this.pager_error});
      return this;
    },

    renderItems: function(collection, options) {
      console.log("render suggetsions");
      console.log(this.suggestions.models);
      var table = this.$el.find('#suggestion_table');
      table.find('.dataRow').remove(); //TODO the underlying views should be removed
      _.each(this.suggestions.models, function(item) {
        var item_view = new TalkThatTalk.Views.OrganizationDashboardSuggestionView({organization_id: this.organization_id, suggestion: item});
        table.append(item_view.render().el);
      });

      var pagination = this.$el.find('#suggestion_pagination');
      var paging_view = new TalkThatTalk.Views.OrganizationDashboardPagingView({collection: collection});
      pagination.html(paging_view.render().el);
    }
  });

}());
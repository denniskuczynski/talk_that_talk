(function() {
  
  TalkThatTalk.Views.Suggestions.IndexView = Backbone.View.extend({
    tagName:  'div',

    template: JST["backbone/templates/suggestions/index"],

    events: {
      'click #add_suggestion_btn' : 'add_suggestion_clicked'
    },

    initialize: function(options) {
      this.organization_id = options.organization_id;
      this.suggestions = options.suggestions;
      this.item_views = [];
      this.paging_view = null;
      this.suggestions.on('reset', this.renderItems, this);
    },

    cleanup: function(options) {
      this.cleanupItemViews();
      this.cleanupPagingView();
      this.remove();
    },

    cleanupItemViews: function() {
      _.each(this.item_views, function(item) {
        item.remove();
      });
      this.item_views = [];
    },

    cleanupPagingView: function() {
      if (this.paging_view !== null) { this.paging_view.remove(); }
    },

    pager_success: function(collection, response) {
      //console.log("Retrieved suggestions page successfully");
    },

    pager_error: function(collection, response) {
      //console.log("Error retrieving suggestions page");
    },

    add_suggestion_clicked: function(event) {
      event.preventDefault();
      TalkThatTalk.OrganizationDashboardRouter.navigate('new_suggestion', {trigger: true});
    },

    render: function() {
      this.$el.html(this.template());
      this.suggestions.pager({success: this.pager_success, error: this.pager_error});
      return this;
    },

    renderItems: function(collection, options) {
      var table = this.$el.find('#suggestion_table');
      this.cleanupItemViews();
      var item_views = this.item_views;
      _.each(this.suggestions.models, function(item) {
        var item_view = new TalkThatTalk.Views.Suggestions.ShowView({organization_id: this.organization_id, suggestion: item});
        item_views.push(item_view);
        table.append(item_view.render().el);
      });

      var pagination = this.$el.find('#suggestion_pagination');
      this.cleanupPagingView();
      this.paging_view = new TalkThatTalk.Views.OrganizationDashboardPagingView({collection: collection});
      pagination.html(this.paging_view.render().el);
    }
  });

}());
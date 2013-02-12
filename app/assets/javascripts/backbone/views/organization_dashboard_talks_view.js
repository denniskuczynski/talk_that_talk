(function() {
  
  TalkThatTalk.Views.OrganizationDashboardTalksView = Backbone.View.extend({
    tagName:  'div',

    template: JST["backbone/templates/organization_dashboard_talks"],

    events: {
      'click #add_talk_btn' : 'add_talk_clicked'
    },

    initialize: function(options) {
      this.organization_id = options.organization_id;
      this.talks = options.talks;
      this.talks.on('reset', this.renderItems, this);
    },

    pager_success: function(collection, response) {
      console.log("Talks pager success");
      console.log(collection);
      console.log(response);
      console.log(this.talks);
    },

    pager_error: function(collection, response) {
      console.log("Talks pager error");
      console.log(collection);
      console.log(response);
      console.log(this.talks);
    },

    add_talk_clicked: function() {
      TalkThatTalk.OrganizationDashboardRouter.navigate('new_talk', {trigger: true});
    },

    render: function() {
      this.$el.html(this.template());
      this.talks.pager({success: this.pager_success, error: this.pager_error});
      return this;
    },

    renderItems: function(collection, options) {
      console.log('render items');
      var table = this.$el.find('#talk_table');
      table.find('.dataRow').remove(); //TODO the underlying views should be removed
      _.each(this.talks.models, function(item) {
        var item_view = new TalkThatTalk.Views.OrganizationDashboardTalkView({organization_id: this.organization_id, talk: item});
        table.append(item_view.render().el);
      });

      var pagination = this.$el.find('#talk_pagination');
      var paging_view = new TalkThatTalk.Views.OrganizationDashboardPagingView({collection: collection});
      pagination.html(paging_view.render().el);
    }
  });

}());
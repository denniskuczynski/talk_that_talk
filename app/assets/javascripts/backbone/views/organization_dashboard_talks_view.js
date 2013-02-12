(function(Backbone) {
  
  TalkThatTalk.Views.OrganizationDashboardTalksView = Backbone.View.extend({
    tagName:  'div',

    template: JST["backbone/templates/organization_dashboard_talks"],

    events: {
      'click #add_talk_btn' : 'add_talk_clicked'
    },

    initialize: function(options) {
      this.talks = options.talks || [];
    },

    add_talk_clicked: function() {
      TalkThatTalk.OrganizationDashboardRouter.navigate('new_talk', {trigger: true});
    },

    render: function() {
      this.$el.html(this.template());
      var table = this.$el.find('#talk_table');
      _.each(this.talks, function(item) {
        var item_view = new TalkThatTalk.Views.OrganizationDashboardTalkView({talk: item});
        table.append(item_view.render().el);
      });
      return this;
    }
  });

}(Backbone));
(function(Backbone) {
  
  TalkThatTalk.Views.OrganizationDashboardTalkView = Backbone.View.extend({
    tagName:  'tr',

    template: JST["backbone/templates/organization_dashboard_talk"],

    events: {
      'click .vote-for-talk' : 'vote_for_talk_clicked'
    },

    initialize: function(options) {
      this.talk = options.talk;
    },

    vote_for_talk_clicked: function() {
    },

    render: function() {
      this.$el.html(this.template({talk: this.talk}));
      return this;
    }
  });

}(Backbone));
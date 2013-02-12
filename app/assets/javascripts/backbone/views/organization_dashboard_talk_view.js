(function() {
  
  TalkThatTalk.Views.OrganizationDashboardTalkView = Backbone.View.extend({
    tagName:  'tr',
    className: 'dataRow',

    template: JST["backbone/templates/organization_dashboard_talk"],

    events: {
      'click .vote-for-talk' : 'vote_for_talk_clicked'
    },

    initialize: function(options) {
      this.organization_id = options.organization_id;
      this.talk = options.talk;
    },

    vote_for_talk_clicked: function(event) {
      event.preventDefault();
      var id = event.currentTarget.id.split('-')[3]
      var vote = new TalkThatTalk.Models.Vote({organization_id: this.organization_id, talk_id: id})
      vote.url = '/organizations/'+this.organization_id+'/talks/'+id+'/votes';
      vote.save({}, {success: voteSuccess, error: voteError})
      function voteSuccess(data) {
        var $votes = $('#votes-count-'+id);
        var count = parseInt($votes.text(), 10);
        $votes.text(count+1);
      }
      function voteError() {
        //alert('Error saving vote');
      }
    },

    render: function() {
      this.$el.html(this.template({talk: this.talk}));
      return this;
    }
  });

}());
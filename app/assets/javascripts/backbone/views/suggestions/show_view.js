(function() {
  
  TalkThatTalk.Views.Suggestions.ShowView = Backbone.View.extend({
    tagName:  'tr',
    className: 'dataRow',

    template: JST["backbone/templates/suggestions/show"],

    events: {
      'click .vote-for-suggestion' : 'vote_for_suggestion_clicked'
    },

    initialize: function(options) {
      this.organization_id = options.organization_id;
      this.suggestion = options.suggestion;
    },

    vote_for_suggestion_clicked: function(event) {
      event.preventDefault();
      var id = event.currentTarget.id.split('-')[3];
      var vote = new TalkThatTalk.Models.Vote({organization_id: this.organization_id, suggestion_id: id})
      vote.url = '/organizations/'+this.organization_id+'/suggestions/'+id+'/votes';
      vote.save({}, {success: onSuccess, error: onError})
      
      function onSuccess(model, res) {
        if (res === true) {
          var $votes = $('#votes-count-'+id);
          var count = parseInt($votes.text(), 10);
          $votes.text(count+1);
          TalkThatTalk.OrganizationDashboardRouter.add_alert_message('Your vote was counted');
        }
      }
      
      function onError(model, res) {
        alert(res.statusText);
      }
    },

    render: function() {
      this.$el.html(this.template({suggestion: this.suggestion}));
      return this;
    }
  });

}());
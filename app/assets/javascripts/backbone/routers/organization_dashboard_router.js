(function() {

  TalkThatTalk.Routers.OrganizationDashboardRouter = Backbone.Router.extend({
    routes:{
      'index'    : 'index',
      'new_talk' : 'new_talk',
      'new_suggestion' : 'new_suggestion'
    },

    initialize: function(options) {
      this.organization_id = options.organization_id;
    },

    index: function() {
      var talks = new TalkThatTalk.Collections.Talks({});
      talks.paginator_core.url = '/organizations/'+this.organization_id+'/talks.json?';
      var suggestions = new TalkThatTalk.Collections.Suggestions({});
      suggestions.paginator_core.url = '/organizations/'+this.organization_id+'/suggestions.json?';
      
      if (this.view !== undefined) { this.view.remove(); }
      this.view = new TalkThatTalk.Views.OrganizationDashboardView({organization_id: this.organization_id, talks: talks, suggestions: suggestions});
      $('#organization_dashboard').html(this.view.render().el);
    },
    new_talk: function() {
      $('#organization_dashboard').html('');
    },
    new_suggestion: function() {
      $('#organization_dashboard').html('');
    }
  });

}());
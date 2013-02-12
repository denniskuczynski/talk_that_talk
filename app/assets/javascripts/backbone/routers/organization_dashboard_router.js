(function(Backbone) {

  TalkThatTalk.Routers.OrganizationDashboardRouter = Backbone.Router.extend({
    routes:{
      'index'    : 'index',
      'new_talk' : 'new_talk',
      'new_suggestion' : 'new_suggestion'
    },

    index: function() {
      var talks = [];
      talks.push(new TalkThatTalk.Models.Talk({}));
      var suggestions = [];
      suggestions.push(new TalkThatTalk.Models.Suggestion({}));
      if (this.view !== undefined) { this.view.remove(); }
      this.view = new TalkThatTalk.Views.OrganizationDashboardView({talks: talks, suggestions: suggestions});
      $('#organization_dashboard').html(this.view.render().el);
    },
    new_talk: function() {
      $('#organization_dashboard').html('');
    },
    new_suggestion: function() {
      $('#organization_dashboard').html('');
    }
  });

  function organization_dashboard_on_ready_handler() {
    if ($('#organization_dashboard').length > 0) {
      TalkThatTalk.OrganizationDashboardRouter = new TalkThatTalk.Routers.OrganizationDashboardRouter();
      Backbone.history.start();
    }
  }

  $(document).ready(organization_dashboard_on_ready_handler);
  $(document).bind('page:change', organization_dashboard_on_ready_handler)

}(Backbone));
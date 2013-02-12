(function() {

  TalkThatTalk.Routers.OrganizationDashboardRouter = Backbone.Router.extend({
    routes:{
      'index'    : 'index',
      'new_talk' : 'new_talk',
      'new_suggestion' : 'new_suggestion',
      ".*"        : "index"
    },

    initialize: function(options) {
      this.organization_id = options.organization_id;

      this.talks = new TalkThatTalk.Collections.Talks({});
      this.talks.paginator_core.url = '/organizations/'+this.organization_id+'/talks.json?';
      
      this.suggestions = new TalkThatTalk.Collections.Suggestions({});
      this.suggestions.paginator_core.url = '/organizations/'+this.organization_id+'/suggestions.json?';
    },

    index: function() {
      if (this.view !== undefined) { this.view.cleanup(); }
      this.view = new TalkThatTalk.Views.OrganizationDashboardView({organization_id: this.organization_id, talks: this.talks, suggestions: this.suggestions});
      $('#organization_dashboard').html(this.view.render().el);
    },

    new_talk: function() {
      var view = new TalkThatTalk.Views.OrganizationDashboardNewTalkView({organization_id: this.organization_id});
      $('#modal-title').html('Add Talk');
      $('#modal-body').html(view.render().el);
      $('#modal').modal({show: true});
      $('#modal').on('hidden', function () {
        TalkThatTalk.OrganizationDashboardRouter.navigate('index', {trigger: false});
      })
    },

    new_suggestion: function() {
      var view = new TalkThatTalk.Views.OrganizationDashboardNewSuggestionView({organization_id: this.organization_id});
      $('#modal-title').html('Add Suggestion');
      $('#modal-body').html(view.render().el);
      $('#modal').modal({show: true});
      $('#modal').on('hidden', function () {
        TalkThatTalk.OrganizationDashboardRouter.navigate('index', {trigger: false});
      })
    }
  });

}());
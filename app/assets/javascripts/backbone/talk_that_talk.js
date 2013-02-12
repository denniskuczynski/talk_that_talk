#= require_self
#= require_tree ./templates
#= require_tree ./models
#= require_tree ./views
#= require_tree ./routers

(function() {

  window.TalkThatTalk = {
    Models: {},
    Collections: {},
    Routers: {},
    Views: {
      Talks: {},
      Suggestions: {}
    }
  };

  function organization_dashboard_on_ready_handler() {
    if ($('#organization_dashboard').length > 0) {
      if (TalkThatTalk.OrganizationDashboardRouter === undefined) {
        var organization_id = $('#organization_dashboard').data('organization-id');
        TalkThatTalk.OrganizationDashboardRouter = new TalkThatTalk.Routers.OrganizationDashboardRouter({organization_id: organization_id});
        Backbone.history.start();      
      }      
    }
  }

  $(document).ready(organization_dashboard_on_ready_handler);
  $(document).bind('page:change', organization_dashboard_on_ready_handler)

}());
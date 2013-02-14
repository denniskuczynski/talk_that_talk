(function() {
  
  TalkThatTalk.Views.Suggestions.NewView = Backbone.View.extend({
    tagName:  'div',

    template: JST["backbone/templates/suggestions/new"],

    events: {
      "click #new_suggestion input[type=submit]" : 'create_btn_clicked'
    },

    initialize: function(options) {
      this.organization_id = options.organization_id;
    },

    create_btn_clicked: function(event) {
      event.preventDefault();
      var suggestion = this.get_model_from_form($('#new_suggestion'));
      suggestion.save({}, {success: onSuccess, error: onError});
      
      function onSuccess(model, res) {
        if (res === true) {
          $('#modal').modal('hide');
          TalkThatTalk.OrganizationDashboardRouter.navigate('index', {trigger: true});
          TalkThatTalk.OrganizationDashboardRouter.add_alert_message('Successfully created suggestion');
          this.destroy();
        } else {
          $('#modal').modal('hide');
          TalkThatTalk.OrganizationDashboardRouter.add_alert_message('Error creating suggestion');
          this.destroy();
        }
      }
      
      function onError(model, res) {
        $('#modal').modal('hide');
        alert(res.statusText);
        this.destroy();
      }
    },

    get_model_from_form: function(form) {
      var concept = form.find('input[name=concept]').val();
      var description = form.find('textarea[name=description]').val();
      
      var suggestion = new TalkThatTalk.Models.Suggestion({organization_id: this.organization_id, 
                                                           concept: concept, 
                                                           description: description});
      suggestion.url = '/organizations/'+this.organization_id+'/suggestions'
      return suggestion;
    },

    render: function() {
      this.$el.html(this.template({}));
      return this;
    }
  });

}());
(function() {
  
  TalkThatTalk.Views.OrganizationDashboardNewSuggestionView = Backbone.View.extend({
    tagName:  'div',

    template: JST["backbone/templates/organization_dashboard_new_suggestion"],

    events: {
      "click #new_suggestion input[type=submit]" : 'create_btn_clicked'
    },

    initialize: function(options) {
      this.organization_id = options.organization_id;
    },

    create_btn_clicked: function(event) {
      event.preventDefault();
      var $form = $('#new_suggestion')
      var concept = $form.find('input[name=concept]').val();
      var description = $form.find('textarea[name=description]').val();
      
      var suggestion = new TalkThatTalk.Models.Suggestion({organization_id: this.organization_id, 
                                                           concept: concept, 
                                                           description: description});
      suggestion.url = '/organizations/'+this.organization_id+'/suggestions'
      suggestion.save({}, {success: onSuccess, error: onError});
      function onSuccess(model, res) {
        if (res === true) {
          $('#modal').modal('hide');
          TalkThatTalk.OrganizationDashboardRouter.navigate('index', {trigger: true});

          $('<div class="alert"><p>Successfully created suggestion</p></div>').insertAfter($('.navbar.subnav'));
        } else {
          $('#modal').modal('hide');
        }
      }
      function onError(model, res) {
        $('#modal').modal('hide');
        alert(res.statusText);
      }
    },

    render: function() {
      this.$el.html(this.template({}));
      return this;
    }
  });

}());
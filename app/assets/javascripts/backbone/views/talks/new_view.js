(function() {
  
  TalkThatTalk.Views.Talks.NewView = Backbone.View.extend({
    tagName:  'div',

    template: JST["backbone/templates/talks/new"],

    events: {
      "click #new_talk input[type=submit]" : 'create_btn_clicked'
    },

    initialize: function(options) {
      this.organization_id = options.organization_id;
    },

    create_btn_clicked: function(event) {
      event.preventDefault();
      var talk = this.get_model_from_form($('#new_talk'));
      talk.save({}, {success: onSuccess, error: onError});
      
      function onSuccess(model, res) {
        if (res === true) {
          $('#modal').modal('hide');
          TalkThatTalk.OrganizationDashboardRouter.navigate('index', {trigger: true});
          TalkThatTalk.OrganizationDashboardRouter.add_alert_message('Successfully created talk');
        } else {
          $('#modal').modal('hide');
          TalkThatTalk.OrganizationDashboardRouter.add_alert_message('Error creating talk');
        }
      }
      
      function onError(model, res) {
        $('#modal').modal('hide');
        alert(res.statusText);
      }
    },

    get_model_from_form: function(form) {
      var name = form.find('input[name=name]').val();
      var description = form.find('textarea[name=description]').val();
      var location = form.find('input[name=location]').val();
      var presented_on = form.find('input[name=presented_on]').val();
      var slides_url = form.find('input[name=slides_url]').val();
      
      var talk = new TalkThatTalk.Models.Talk({organization_id: this.organization_id, 
                                               name: name, 
                                               description: description, 
                                               location: location, 
                                               presented_on: presented_on, 
                                               slides_url: slides_url});
      talk.url = '/organizations/'+this.organization_id+'/talks'
      return talk;
    },

    render: function() {
      this.$el.html(this.template({}));
      this.$el.find('.datepicker').datepicker();
      return this;
    }
  });

}());
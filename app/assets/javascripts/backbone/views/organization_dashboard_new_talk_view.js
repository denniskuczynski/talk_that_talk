(function() {
  
  TalkThatTalk.Views.OrganizationDashboardNewTalkView = Backbone.View.extend({
    tagName:  'div',

    template: JST["backbone/templates/organization_dashboard_new_talk"],

    events: {
      "click #new_talk input[type=submit]" : 'create_btn_clicked'
    },

    initialize: function(options) {
      this.organization_id = options.organization_id;
    },

    create_btn_clicked: function(event) {
      event.preventDefault();
      var $form = $('#new_talk')
      var name = $form.find('input[name=name]').val();
      var description = $form.find('textarea[name=description]').val();
      var location = $form.find('input[name=location]').val();
      var presented_on = $form.find('input[name=presented_on]').val();
      var slides_url = $form.find('input[name=slides_url]').val();
      
      var talk = new TalkThatTalk.Models.Talk({organization_id: this.organization_id, 
                                               name: name, 
                                               description: description, 
                                               location: location, 
                                               presented_on: presented_on, 
                                               slides_url: slides_url});
      talk.url = '/organizations/'+this.organization_id+'/talks'
      talk.save({}, {success: onSuccess, error: onError});
      function onSuccess(model, res) {
        if (res === true) {
          $('#modal').modal('hide');
          TalkThatTalk.OrganizationDashboardRouter.navigate('index', {trigger: true});

          $('<div class="alert"><p>Successfully created talk</p></div>').insertAfter($('.navbar.subnav'));
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
      this.$el.find('.datepicker').datepicker();
      return this;
    }
  });

}());
(function(Backbone) {

  TalkThatTalk.Models.Talk = Backbone.Model.extend({
    defaults: {
      name: '',
      description: '',
      location: '',
      presented_on: null,
      slides_url: '',
      user_name: '',
      gravatar_id: '',
      votes_count: 0
    }
  });

}(Backbone));
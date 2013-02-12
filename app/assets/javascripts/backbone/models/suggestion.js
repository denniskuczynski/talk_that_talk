(function(Backbone) {

  TalkThatTalk.Models.Suggestion = Backbone.Model.extend({
    defaults: {
      concept: '',
      description: '',
      user_name: '',
      gravatar_id: '',
      created_at: null,
      votes_count: 0
    }
  });

}(Backbone));
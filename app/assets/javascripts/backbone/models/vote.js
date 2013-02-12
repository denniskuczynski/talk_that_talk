(function() {

  TalkThatTalk.Models.Vote = Backbone.Model.extend({
    defaults: {
      organization_id: null,
      user_id: null,
      talk_id: null,
      suggestion_id: null
    }
  });

}());
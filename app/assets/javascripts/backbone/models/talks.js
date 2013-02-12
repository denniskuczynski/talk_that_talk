(function(Backbone) {
 
  TalkThatTalk.Collections.Talks = Backbone.Collection.extend({
    model: TalkThatTalk.Models.Talk
  });

}(Backbone));
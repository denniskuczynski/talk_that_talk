(function() {
 
  TalkThatTalk.Collections.Talks = Backbone.Paginator.requestPager.extend({
    model: TalkThatTalk.Models.Talk,

    paginator_core: {
      type: 'GET',
      dataType: 'json'
    },

    paginator_ui: {
      firstPage: 1,
      currentPage: 1,
      perPage: 5,
    },

    server_api: {
      'page': function() { return this.currentPage }
    },

    parse: function (response) {
      var data = response.data;
      this.totalPages = Math.ceil(response.total / this.paginator_ui.perPage)
      return data;
    }

  });

}());
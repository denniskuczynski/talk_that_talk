(function() {
  
  TalkThatTalk.Views.OrganizationDashboardPagingView = Backbone.View.extend({
    tagName:  'tr',

    template: JST["backbone/templates/organization_dashboard_paging"],

    events: {
      'click .paging-link' : 'paging_link_clicked'
    },

    initialize: function(options) {
      this.collection = options.collection;
    },

    paging_link_clicked: function(event) {
      console.log("page_link");
      console.log(this.collection);
      event.preventDefault();
      var $target = $(event.currentTarget);
      var linkText = $target.text();
      if (linkText === 'Next') {
        this.collection.requestNextPage({});
      } else if (linkText === 'Prev') {
        this.collection.requestPreviousPage({});
      }else {
        this.collection.goTo(parseInt(linkText, 10), {});
      }
    },

    render: function() {
      console.log("render paging");
      console.log(this.collection);
      this.$el.html(this.template({collection: this.collection}));
      return this;
    }
  });

}());
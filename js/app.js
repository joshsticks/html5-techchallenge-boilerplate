(function ($) {
	// A generic article in our app
	var Article = Backbone.Model.extend({

	});

	// A list of articles that are featured on the main page
	var MainArticles = Backbone.Model.extend({
		url: "http://html5news.herokuapp.com/articles/featured",
		initialize: function (options) {

		}
	});

	// A list of articles in a single category
	var CategoryArticles = Backbone.Collection.extend({

	});

	// A view used to render out lists of articles
	var PageView = Backbone.View.extend({
		el: $("#content"),
          		template: _.template($("#page-template").html()),
          		initialize: function (options) {
          			var that = this;
          			this.model.fetch({
          				success: function( results ) {
          					that.render();
          				}
          			});
          		},
          		render: function () {
            		this.$el.html(this.template(this.model));
               		return this;
          		}
	});

	// A router that handles our single page app's navigation
	var AppRouter = Backbone.Router.extend({	
		routes: {
               		"": "home"
          		},

		home: function () {
			var pageView = new PageView({model: new MainArticles()});
          		}
	});

	var appRouter = new AppRouter();
	Backbone.history.start();
}) (jQuery);
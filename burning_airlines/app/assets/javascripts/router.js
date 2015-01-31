var App = App || {};

App.router = new Backbone.Router.extend({
  routes: {
    "": 'homepage',
  },

  homepage: function(){
    var airplaneCollection = new App.Airplanes();
    airplaneCollection.fetch().then(function(){
      var airplaneView = new App.airplaneView({collection: airplaneCollection});
      $('#container').html(airplaneView.render().el);

    });  
  },

});


var App = App || {};

App.AirplaneView = Backbone.View.extend({
  render: function(){

    this.$el.html(
        JST['airplane'](
          {airplane: this.collection.toJSON()}
          )
      );
     console.log(airplaneView);
  }
     
});
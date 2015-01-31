var App = App || {};

App.Airplanes = Backbone.Collection.extend({
  url: "/airplanes",
  model: App.Airplane,

});
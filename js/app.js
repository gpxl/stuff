window.Stuff = Ember.Application.create();
Stuff.ApplicationAdapter = DS.FixtureAdapter.extend();

Stuff.Router.map(function(){
  this.resource('products', { path: '/'});
});

Stuff.ProductsRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('product');
  }
});

Stuff.Product = DS.Model.extend({
  title: DS.attr('string'),
  price:  DS.attr('number'),
  availability: DS.attr('boolean'),
  obo: DS.attr('boolean'),
  image: DS.attr('string'),
  grid: DS.attr('string'),
  categories: DS.attr('string'),
  img : function () { return "/images/" + this.get('image'); }.property(),
  gurl : function () { return "https://gum.co/" + this.get('grid'); }.property()
});

Stuff.Product.FIXTURES = [
{
  id: 1,
  title:  "16gb Apple iPad Mini - First Generation",
  price:  "$250",
  availability: 1,
  obo: 1,
  image: "ipadmini.jpg",
  grid: "ipadmini",
  categories: ['Electronics'],
},
{
  id: 2,
  title:  "Playstation 3 with 12 Games",
  price:  "$300",
  availability: 1,
  obo: 1,
  image: "ps3.jpg",
  grid: "ps3",
  categories: ['Electronics', 'Video Games'],
},
];

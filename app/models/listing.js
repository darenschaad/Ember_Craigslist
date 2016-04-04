import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  price: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  location: DS.attr(),
  date: DS.attr(),
  contact: DS.attr(),
  category: DS.belongsTo('category', { async: true })
});

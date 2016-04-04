import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    saveListing() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        price: this.get('price'),
        description: this.get('description'),
        category: this.get('category'),
        image: this.get('image'),
        date: this.get('date'),
        location: this.get('location'),
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});

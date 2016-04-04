import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    saveListing() {
      var date = new Date();
      date = date.toString().substring(4, 15);
      var momentDateAndTime = moment(date).format('MM/DD/YYYY');
      var params = {
        title: this.get('title') ? this.get('title'):"",
        author: this.get('author') ? this.get('author'):"",
        price: this.get('price') ? this.get('price'):"",
        description: this.get('description') ? this.get('description'):"",
        category: this.get('category'),
        image: this.get('image') ? this.get('image'):"",
        date: momentDateAndTime,
        location: this.get('location') ? this.get('location'):"",
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});

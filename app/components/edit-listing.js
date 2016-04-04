import Ember from 'ember';

export default Ember.Component.extend({
  editFormShow: false,
  actions: {
    showEditForm() {
      this.set("editFormShow", true);
    },
    saveEdit(listing) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        price: this.get('price'),
        description: this.get('description'),
        category: this.get('category'),
        image: this.get('image'),
        location: this.get('location'),
        contact: this.get('contact'),
      };
      this.set('editFormShow', false);
      this.sendAction('saveEdit', listing, params);
    }
  }
});

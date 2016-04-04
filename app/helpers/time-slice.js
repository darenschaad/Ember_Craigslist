import Ember from 'ember';

export function timeSlice(params) {
  var body = params[0];
    return body.toString().substring(0,10);
}

export default Ember.Helper.helper(timeSlice);


// date.toString().substring(16, 24);

import Ember from 'ember';

export default Ember.Component.extend({
  isFeature: false,
  actions: {
    makeFeature: function() {
      if(this.feature === "true") {
        this.set('isFeature', true);
      }
    }
  }
});

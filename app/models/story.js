import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  images: DS.attr(),
  genre: DS.attr(),
  title: DS.attr(),
  isFeature: Ember.computed('feature', function() {
    return this.get('feature') == "true";
  })
});

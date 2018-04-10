import Ember from 'ember';
import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.nameKey = Ember.NAME_KEY;
  }
});

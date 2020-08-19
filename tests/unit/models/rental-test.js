import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | rental', function(hooks) {
  setupTest(hooks);

  test('it has the right type', function(assert) {
    let store = this.owner.lookup('service:store');
    let rental = store.createRecord('rental', {
      id: 'cozy-mansion',
      title: 'Cozy Mansion',
      owner: 'David',
      location: 'Amazon Rainforest',
      coordinates: {
        lat: -3.4653,
        lng: -62.2159,
        zoom: 3,
      },
      category: 'Mansion',
      bedrooms: 10,
      image: '/assets/images/villa.jpg',
      description: 'This cozy mansion sits on over 100 acres of tropical rainforest.',
    });

    assert.equal(rental.type, 'Mansion');

    rental.category = 'House';
    assert.equal(rental.type, 'House');
  });
});

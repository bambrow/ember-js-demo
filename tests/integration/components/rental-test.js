import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.owner.setupRouter();
  });

  test('it renders information about a rental property', async function(assert) {
    this.setProperties({
      rental: {
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
        type: 'Mansion',
        bedrooms: 10,
        image: '/assets/images/villa.jpg',
        description: 'This cozy mansion sits on over 100 acres of tropical rainforest.',
      }
    });

    await render(hbs`<Rental @rental={{this.rental}} />`);

    assert.dom('article').hasClass('rental');
    assert.dom('article h3').hasText('Cozy Mansion');
    assert.dom('article h3 a').hasAttribute('href', '/rentals/cozy-mansion');
    assert.dom('article .detail.owner').includesText('David');
    assert.dom('article .detail.type').includesText('Mansion');
    assert.dom('article .detail.location').includesText('Amazon Rainforest');
    assert.dom('article .detail.bedrooms').includesText('10');

    assert.dom('article .image').exists();
    assert.dom('article .map').exists();
  });
});

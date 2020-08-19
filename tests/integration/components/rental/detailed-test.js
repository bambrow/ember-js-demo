import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/detailed', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.setProperties({
      rental: {
        id: 'cozy-mansion',
        title: 'Cozy Mansion',
        owner: 'David',
        location: 'Amazon Rainforest',
        coordinates: {
          lat: -3.4653,
          lng: -62.2159,
          zoom: 4.5,
        },
        category: 'Mansion',
        type: 'Mansion',
        bedrooms: 10,
        image: '../assets/images/villa.jpg',
        description: 'This cozy mansion sits on over 100 acres of tropical rainforest.',
      }
    });
  });

  test('it renders a header with a share button', async function(assert) {
    await render(hbs`<Rental::Detailed @rental={{this.rental}} />`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo h2').containsText('Cozy Mansion');
    assert.dom('.jumbo p').containsText('a nice place to stay near Amazon Rainforest');
    assert.dom('.jumbo a.button').containsText('Share on Twitter');
  });

  test('it renders detailed information about a rental property', async function(assert) {
    await render(hbs`<Rental::Detailed @rental={{this.rental}} />`);

    assert.dom('article').hasClass('rental');
    assert.dom('article h3').containsText('About Cozy Mansion');
    assert.dom('article .detail.owner').containsText('David');
    assert.dom('article .detail.type').containsText('Mansion');
    assert.dom('article .detail.location').containsText('Amazon Rainforest');
    assert.dom('article .detail.bedrooms').containsText('10');
    assert.dom('article .image').exists();
    assert.dom('article .map').exists();
  });
});

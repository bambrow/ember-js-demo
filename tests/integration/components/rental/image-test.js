import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/image', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function(assert) {
    await render(hbs`<Rental::Image src="../assets/images/villa.jpg" alt="A picture of cozy mansion" />`);

    assert.dom('.image').exists();
    assert.dom('.image img').hasAttribute('src', '../assets/images/villa.jpg');
    assert.dom('.image img').hasAttribute('alt', 'A picture of cozy mansion');
  });

  test('clicking on the component toggles its size', async function(assert) {
    await render(hbs`<Rental::Image src="../assets/images/villa.jpg" alt="A picture of cozy mansion" />`);

    assert.dom('button.image').exists();
    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');

    await click('button.image');

    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('View Smaller');

    await click('button.image');

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');
  });
});

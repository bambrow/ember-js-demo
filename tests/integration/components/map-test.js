import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import ENV from 'ember-js-demo/config/environment';

module('Integration | Component | map', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a map image for the specified parameters', async function(assert) {
    await render(hbs`<Map
      @lat="23.4162"
      @lng="25.6628"
      @zoom="2"
      @width="150"
      @height="120"
    />`);

    assert.dom('.map').exists();
    assert.dom('.map img').hasAttribute('alt', 'Map image at coordinates 23.4162,25.6628');
    assert.dom('.map img').hasAttribute('src', /^https:\/\/api\.mapbox\.com/, 'the src starts with "https://api.mapbox.com"');
    assert.dom('.map img').hasAttribute('width', '150');
    assert.dom('.map img').hasAttribute('height', '120');

    let { src } = find('.map img');
    let token = encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);

    assert.ok(src.includes('25.6628,23.4162,2'), 'the src should include the lng,lat,zoom parameter');
    assert.ok(src.includes('150x120@2x'), 'the src should include the width,height and @2x parameter');
    assert.ok(src.includes(`access_token=${token}`), 'the src should include the escaped access token');

  });

  test('it updates the `src` attribute when the arguments change', async function(assert) {
    this.setProperties({
      lat: 23.4162,
      lng: 25.6628,
      zoom: 2,
      width: 150,
      height: 120,
    });

    await render(hbs`<Map
      @lat={{this.lat}}
      @lng={{this.lng}}
      @zoom={{this.zoom}}
      @width={{this.width}}
      @height={{this.height}}
    />`);

    let img = find('.map img');

    assert.ok(img.src.includes('25.6628,23.4162,2'), 'the src should include the lng,lat,zoom parameter');
    assert.ok(img.src.includes('150x120@2x'), 'the src should include the width,height and @2x parameter');

    this.setProperties({
      width: 300,
      height: 200,
      zoom: 3,
    });

    assert.ok(img.src.includes('25.6628,23.4162,3'), 'the src should include the lng,lat,zoom parameter');
    assert.ok(img.src.includes('300x200@2x'), 'the src should include the width,height and @2x parameter');

    this.setProperties({
      lat: -3.4653,
      lng: -62.2159,
    });

    assert.ok(img.src.includes('-62.2159,-3.4653,3'), 'the src should include the lng,lat,zoom parameter');
    assert.ok(img.src.includes('300x200@2x'), 'the src should include the width,height and @2x parameter');
  });

  test('the default alt attribute can be overridden', async function(assert) {
    await render(hbs`<Map
      @lat="23.4162"
      @lng="25.6628"
      @zoom="2"
      @width="150"
      @height="120"
      alt="A map of Sahara Desert"
    />`);

    assert.dom('.map img').hasAttribute('alt', 'A map of Sahara Desert');
  });

  test('the src, width and height attributes cannot be overridden', async function(assert) {
    await render(hbs`<Map
      @lat="23.4162"
      @lng="25.6628"
      @zoom="2"
      @width="150"
      @height="120"
      src="/assets/images/teaching-tomster.png"
      width="200"
      height="300"
    />`);

    assert.dom('.map img').hasAttribute('src', /^https:\/\/api\.mapbox\.com/, 'the src starts with "https://api.mapbox.com"');
    assert.dom('.map img').hasAttribute('width', '150');
    assert.dom('.map img').hasAttribute('height', '120');
  });
});

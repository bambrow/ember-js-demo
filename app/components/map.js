import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import ENV from 'ember-js-demo/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {
  @tracked isZoomed = false;

  get src() {
    let { lng, lat, width, height, zoom } = this.args;
    if (this.isZoomed) {
      zoom *= 1.5;
    }

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions  = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }

  @action toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }
}

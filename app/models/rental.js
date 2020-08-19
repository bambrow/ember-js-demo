import Model, { attr } from '@ember-data/model';

export default class RentalModel extends Model {
  @attr title;
  @attr owner;
  @attr location;
  @attr coordinates;
  @attr category;
  @attr image;
  @attr bedrooms;
  @attr description;

  get type() {
    if (this.category) {
      return this.category;
    } else {
      return 'Other';
    }
  }
}

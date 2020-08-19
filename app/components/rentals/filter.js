import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    let queryTrim = query.trim().toLowerCase();

    if (queryTrim) {
      rentals = rentals.filter(rental =>
        rental.title.toLowerCase().includes(queryTrim)
          || rental.location.toLowerCase().includes(queryTrim)
          || rental.type.toLowerCase().includes(queryTrim)
          || rental.owner.toLowerCase().includes(queryTrim)
      );
    }

    return rentals;
  }
}

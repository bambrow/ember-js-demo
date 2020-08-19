# Ember.js Demo - Super Rentals

This website displays several interesting places for rent, implemented using Ember.js.
The tutorial can be found [here](https://guides.emberjs.com/release/tutorial/part-1/).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone https://github.com/bambrow/ember-js-demo.git`
* `cd ember-js-demo`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

This project has been deployed to Heroku. 
Due to the Ember.js application Heroku buildpack issue, in `package.json` the `node` version is set to `12.18.2`. 
See [Heroku tutorial](https://www.heroku.com/emberjs) and [buildpack source code](https://github.com/heroku/heroku-buildpack-emberjs) for details.

The demo of this project can be found [here](https://ember-js-super-rentals.herokuapp.com/).

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

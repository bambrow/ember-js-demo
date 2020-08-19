import Application from 'ember-js-demo/app';
import config from 'ember-js-demo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();

/**
 * Created by rob on 8/3/15.
 */

'use strict';

var Fluxible = require('fluxible');
var PizzaUIStore = require('./stores/PizzaUIStore');
var PizzaModelStore = require('./stores/PizzaModelStore');

let fluxibleApp = new Fluxible({
    component: require('./components/PizzaViewController.jsx')
});

fluxibleApp.registerStore(PizzaUIStore);
fluxibleApp.registerStore(PizzaModelStore);


module.exports = fluxibleApp;

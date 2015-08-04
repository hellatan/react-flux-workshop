const React = require('react');
const PizzaApp = require('./PizzaApp');
const createElementWithContext = require('fluxible-addons-react/createElementWithContext');

const context = window.context = PizzaApp.createContext();

React.render(
    createElementWithContext(context),
    document.getElementById('container')
);
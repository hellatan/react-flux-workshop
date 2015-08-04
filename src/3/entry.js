const React = require('react');
const HelloWorldComponent = require('./components/HelloWorldComponent');

React.render(
    <HelloWorldComponent name={'Rob'} />,
    document.getElementById('container')
);
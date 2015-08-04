/**
 * Created by rob on 8/3/15.
 */

'use strict';

const React = require('react');
const PizzaSizeSelector = require('./PizzaSizeSelector');
const PizzaConfirmation = require('./PizzaConfirmation');

class PizzaCurrentTab extends React.Component {
    render() {
        const currentTab = this.props.ui.currentTab;

        if (currentTab === 'size') {
            return <PizzaSizeSelector {...this.props} />
        }

        return <PizzaConfirmation {...this.props} />
    }
}

module.exports = PizzaCurrentTab;

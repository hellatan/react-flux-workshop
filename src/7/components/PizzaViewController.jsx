/**
 * Created by rob on 8/3/15.
 */

'use strict';

const React = require('react');
const connectToStores = require('fluxible-addons-react/connectToStores');
const provideContext = require('fluxible-addons-react/provideContext');
const PizzaCurrentTab = require('./PizzaCurrentTab');
const PizzaTabs = require('./PizzaTabs');
const PizzaUIStore = require('../stores/PizzaUIStore');
const PizzaModelStore = require('../stores/PizzaModelStore');

class PizzaViewController extends React.Component {
    render() {
        return (
            <div>
                <div className="Example mb2 border rounded">
                    <PizzaTabs {...this.props} />
                    <div className="p2 m0 border-none">
                        <PizzaCurrentTab {...this.props} />
                    </div>
                </div>
            </div>
        );
    }
}

PizzaViewController = connectToStores(PizzaViewController, [PizzaUIStore, PizzaModelStore], function (context) {
    return {
        ui: context.getStore(PizzaUIStore).state,
        model: context.getStore(PizzaModelStore).model
    };
});

PizzaViewController = provideContext(PizzaViewController);

module.exports = PizzaViewController;

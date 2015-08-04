/**
 * Created by rob on 8/3/15.
 */

'use strict';

const BaseStore = require('fluxible/addons/BaseStore');

class PizzaModelStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);

        // defaults
        this.model = {
            size: 'medium'
        }
    }

    changeSize(size) {
        this.model.size = size;
        this.emitChange();
    }

    doneSaving(pizza) {
        this.model = pizza;
        this.emitChange();
    }
}

PizzaModelStore.storeName = 'PizzaModelStore';
PizzaModelStore.handlers = {
    'pizza:size:change': 'changeSize',
    'pizza:saving:done': 'doneSaving'
};

module.exports = PizzaModelStore;
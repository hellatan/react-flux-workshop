/**
 * Created by rob on 8/3/15.
 */

'use strict';

const BaseStore = require('fluxible/addons/BaseStore');

class PizzaUIStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.state = {
            currentTab: 'size',
            isSaving: false
        }
    }

    startSaving() {
        this.state.isSaving = true;
        this.emitChange();
    }

    doneSaving() {
        this.state.isSaving = false;
        this.state.currentTab = 'confirmation';
        this.emitChange();
    }
}

PizzaUIStore.storeName = 'PizzaUIStore';
PizzaUIStore.handlers = {
    'pizza:saving:start': 'startSaving',
    'pizza:saving:done': 'doneSaving'
};

module.exports = PizzaUIStore;
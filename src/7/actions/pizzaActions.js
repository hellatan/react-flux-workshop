/**
 * Created by rob on 8/3/15.
 */

'use strict';

module.exports = {
    changeSize(actionContext, pizzaSize) {
        actionContext.dispatch('pizza:size:change', pizzaSize);
    },

    completeSize(actionContext) {
        actionContext.dispatch('sizeTab:complete');
    },

    savePizza(actionContext, pizza) {
        actionContext.dispatch('pizza:saving:start');
        setTimeout(() => {
            pizza.id = 123;
            pizza.status = 'DELIVERED';
            actionContext.dispatch('pizza:saving:done', pizza);
        }, 3000)
    }
};
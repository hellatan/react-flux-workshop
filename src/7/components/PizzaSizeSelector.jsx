/**
 * Created by rob on 8/3/15.
 */

'use strict';

const React = require('react');
const pizzaActions = require('../actions/pizzaActions');

class PizzaSizeSelector extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.context.executeAction(pizzaActions.changeSize, e.target.value);
    }

    handleClick() {
        this.context.executeAction(pizzaActions.savePizza, this.props.model);
    }

    getProps(size) {
        return {
            onChange: this.handleChange,
            type: "radio",
            value: size,
            checked: this.props.model.size === size,
            disabled: this.props.ui.isSaving
        }
    }

    render() {
        return (
            <div>
                <p>
                    <label>
                        <input {...this.getProps('small')}/> small <br />
                    </label>
                    <label>
                        <input {...this.getProps('medium')}/> medium <br />
                    </label>
                    <label>
                        <input {...this.getProps('large')}/> large <br />
                    </label>
                </p>
                <p>
                    {this.renderButton()}
                </p>
            </div>
        );
    }

    renderButton() {
        if (this.props.ui.isSaving) {
            return <button onClick={this.handleClick} className="btn btn-primary" disabled>Saving...</button>
        }
        return <button onClick={this.handleClick} className="btn btn-primary">Save</button>
    }
}

PizzaSizeSelector.contextTypes = {
    executeAction: React.PropTypes.func.isRequired
};

module.exports = PizzaSizeSelector;

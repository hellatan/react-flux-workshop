/**
 * Created by rob on 8/3/15.
 */

'use strict';

const React = require('react');

class PizzaConfirmation extends React.Component {
    render() {
        return (
            <div>
                <h2>Pizza has been ordered!</h2>
                <ul>
                   <li><b>Order ID:</b> {this.props.model.id}</li>
                   <li><b>Pizza size:</b> {this.props.model.size}</li>
                   <li><b>Pizza status:</b> {this.props.model.status}</li>
                </ul>
            </div>
        );
    }
}

module.exports = PizzaConfirmation;

/**
 * Created by rob on 8/3/15.
 */

'use strict';

const React = require('react');

class NameInput extends React.Component {
    render() {
        return (
            <div>
                <label>
                    Enter your name: <input value={this.props.name} onChange={this.props.onChange} />
                </label>
            </div>
        );
    }
}

module.exports = NameInput;

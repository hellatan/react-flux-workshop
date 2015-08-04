/**
 * Created by rob on 8/3/15.
 */

'use strict';

const React = require('react');

class PizzaTabs extends React.Component {
    render() {
        const currentTab = this.props.ui.currentTab;
        return (
            <div className="p2 border-bottom">
                <div className="mb1">
                    <button className={currentTab === 'size' ? 'btn btn-primary' : 'btn'}>Pizza Size</button>
                    <button className={currentTab === 'confirmation' ? 'btn btn-primary' : 'btn'}>Confirmation</button>
                </div>
            </div>
        );
    }
}

module.exports = PizzaTabs;

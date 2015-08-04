/**
 * Created by rob on 8/2/15.
 */

'use strict';

const React = require('react');
const moment = require('moment');

class TodayComponent extends React.Component {
    render() {
        const today = moment().format(this.props.dateFormat);
        return (
            <p>Today is <b>{today}</b></p>
        );
    }
}

module.exports = TodayComponent;

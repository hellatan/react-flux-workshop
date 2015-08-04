const React = require('react');
const TodayComponent = require('./TodayComponent');

class HelloWorldComponent extends React.Component {
    render() {
        const {name} = this.props;
        const dateFormat = "LLLL";
        return (
            <div>
                <h2 className='hello-world'>
                    Hello, {name}!
                </h2>
                <TodayComponent dateFormat={dateFormat} />
            </div>
        );
    }
}

module.exports = HelloWorldComponent;
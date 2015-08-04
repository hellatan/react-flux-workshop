const React = require('react');
const TodayComponent = require('./TodayComponent');

class HelloWorldComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Rob'
        };
    }
    render() {
        const {name} = this.state;
        const dateFormat = "LLLL";
        return (
            <div>
                <h2 className='hello-world'>
                    Hello, {name}!
                </h2>
                <TodayComponent dateFormat={dateFormat} />
                <input value={name} />
            </div>
        );
    }
}

module.exports = HelloWorldComponent;
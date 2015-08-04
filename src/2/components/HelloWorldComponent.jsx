const React = require('react');
const TodayComponent = require('./TodayComponent');

class HelloWorldComponent extends React.Component {
    render() {
        const name = "World";
        return (
            <div>
                <h2 className='hello-world'>
                    Hello, {name}!
                </h2>
                <TodayComponent />
            </div>
        );
    }
}

module.exports = HelloWorldComponent;
const React = require('react');

class HelloWorldComponent extends React.Component {
    render() {
        const name = "World";
        return (
            <div className='hello-world'>
                Hello, {name}!
            </div>
        );
    }
}

module.exports = HelloWorldComponent;
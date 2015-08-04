const React = require('react');
const TodayComponent = require('./TodayComponent');

class HelloWorldComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Rob'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const value = e.target.value;
        this.setState({name: value});
    }

    render() {
        const {name} = this.state;
        const dateFormat = "L";
        return (
            <div>
                <h2 className='hello-world'>
                    Hello, {name}!
                </h2>
                <TodayComponent dateFormat={dateFormat} />
                <input value={name} onChange={this.handleChange} />
            </div>
        );
    }
}

module.exports = HelloWorldComponent;
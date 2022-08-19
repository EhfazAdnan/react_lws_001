/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

// class components
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date(),
            });
        }, 1000);
    }

    render() {
        return (
            <h1 className="heading">
                <span className="text">
                    Hello it is {this.state.date.toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}

export default Clock;

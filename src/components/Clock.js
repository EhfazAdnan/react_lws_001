/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

// class components
class Clock extends React.Component {
    render() {
        return (
            <h1 className="heading">
                <span className="text">
                    Hello it is {new Date().toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}

export default Clock;

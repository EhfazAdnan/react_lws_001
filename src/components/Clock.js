/* eslint-disable react/jsx-no-bind */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './Button';

// class components
class Clock extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }

    // short cut way if props value not use when initialize state
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('clock rendered');
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">Hello it is {date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick} locale="en-US">
                    Click Here
                </Button>
            </div>
        );
    }
}

export default Clock;

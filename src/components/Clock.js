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
        const { date, locale } = this.state;
        let button;
        if (locale === 'bn-BD') {
            button = <Button change={this.handleClick} locale="en-US" show={false} />;
        } else {
            button = <Button change={this.handleClick} locale="bn-BD" show />;
        }
        return (
            <div>
                <h1 className="heading">
                    <span className="text">Hello it is {date.toLocaleTimeString(locale)}</span>
                </h1>
                {button}
            </div>
        );
    }
}

export default Clock;

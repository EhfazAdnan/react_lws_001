/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';

class HoverCounter extends React.Component {
    state = {
        count: 0,
    };

    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <h1 onMouseOver={this.incrementCount}>Hovered {count}</h1>
            </div>
        );
    }
}

export default HoverCounter;

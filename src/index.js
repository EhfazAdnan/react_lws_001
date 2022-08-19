/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';

// functional component
// function Clock({ locale }) {
//     return (
//         <h1 className="heading">
//             <span className="text">Hello {new Date().toLocaleTimeString(locale)}</span>
//         </h1>
//     );
// }

// class components
// eslint-disable-next-line react/prefer-stateless-function
class Clock extends React.Component {
    render() {
        return (
            <h1 className="heading">
                <span className="text">
                    Hello {new Date().toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}

ReactDOM.render(<Clock locale="en-US" />, document.getElementById('root'));

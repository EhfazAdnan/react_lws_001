/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'JavaScript',
        textarea: 'JavaScript Text Area',
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                textarea: e.target.value,
            });
        }
    };

    render() {
        const { title, textarea } = this.state;
        return (
            <div>
                <br />
                <form>
                    <input
                        type="text"
                        placeholder="Enter Title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <p>{title}</p>
                    <br />
                    <br />
                    <textarea type="textarea" value={textarea} onChange={this.handleChange} />
                    <p>{textarea}</p>
                </form>
            </div>
        );
    }
}

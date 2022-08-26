/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'JavaScript',
        textarea: 'JavaScript Text Area',
        selectValue: 'React',
        checkBox: true,
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
        } else if (e.target.type === 'select-one') {
            this.setState({
                selectValue: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                checkBox: e.target.checked,
            });
        }
    };

    submitHandler = (e) => {
        const { title, textarea, selectValue, checkBox } = this.state;
        e.preventDefault();
        console.log(title, textarea, selectValue, checkBox);
    };

    render() {
        const { title, textarea, selectValue, checkBox } = this.state;
        return (
            <div>
                <br />
                <form onSubmit={this.submitHandler}>
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
                    <br />
                    <br />
                    <select value={selectValue} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <p>{selectValue}</p>
                    <br />
                    <br />
                    <input type="checkbox" checked={checkBox} onChange={this.handleChange} />
                    <p>{checkBox ? 'true' : 'false'}</p>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

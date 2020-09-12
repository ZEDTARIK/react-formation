import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const { fullName, email } = this.props.data;
        return (
            <>
                <ul className="list-group">
                    <li className="list-group-item">{fullName}</li>
                    <li className="list-group-item">{email}</li>
                </ul>
            </>
        )
    }
}

export default Contact

import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const {fullName, email} = this.props;
        return (
            <>
                <h3>Contact Numero : 1 </h3>
                <ul>
                    <li>{ fullName }</li>
                    <li>{ email }</li>
                </ul>
            </>
        )
    }
}

export default Contact

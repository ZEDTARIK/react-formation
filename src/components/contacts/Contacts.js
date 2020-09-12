import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            { id: 1, fullName: "Zouhair ettarak", email: "ettarak.zouhair@gmail.com" },
            { id: 2, fullName: "Hafssa", email: "hafssa@dell.com" }
        ]
    }
    render() {
        const { contacts } = this.state;
        return (
            <>
                {contacts.map((contact) => (
                    <Contact data={contact} />))
                }
            </>
        )
    }
}

export default Contacts

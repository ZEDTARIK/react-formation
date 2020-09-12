import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            { id: 1, fullName: "Zouhair ettarak", email: "ettarak.zouhair@gmail.com" },
            { id: 2, fullName: "Hafssa", email: "hafssa@dell.com" }
        ]
    }

    deleteContact(id) {
        const { contacts } = this.state;
        const ListContact = contacts.filter((data) => data.id !== id)
        this.setState({
            contacts: ListContact
        })
    }

    render() {
        const { contacts } = this.state;
        return (
            <>
                {contacts.map((contact) => (
                    <Contact key={contact.id}
                        data={contact}
                        deleteContactFromChild={this.deleteContact.bind(this, contact.id)}
                    />))
                }
            </>
        )
    }
}

export default Contacts

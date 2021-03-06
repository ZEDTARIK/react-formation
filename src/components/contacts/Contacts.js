import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
   

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

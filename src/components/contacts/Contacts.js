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
                <div className="row">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Contact</h3>
                        </div>
                        <div className="panel-body">
                            {contacts.map((contact) => (
                                <Contact data={contact} />
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contacts

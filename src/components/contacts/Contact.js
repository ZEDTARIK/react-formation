import React, { Component } from 'react';

class Contact extends Component {

    showContact(fullName) {
        console.log(fullName);
    }
    render() {
        const { fullName, email } = this.props.data;
        return (
            <>
                <div className="row">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 onClick={this.showContact.bind(this, fullName)} className="panel-title">{fullName}</h3>
                        </div>
                        <div className="panel-body">
                            <ul className="list-group">
                                <li className="list-group-item">{fullName}</li>
                                <li className="list-group-item">{email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact

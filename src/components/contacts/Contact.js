import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Contact extends Component {

    state = {
        showContactToggle: true
    }
    showContact() {
        this.setState({
            showContactToggle: !this.state.showContactToggle
        })
    }

    onDeleteContact = () => {
        this.props.deleteContactFromChild();
    }

    render() {
        const { fullName, email } = this.props.data;
        return (
            <>
                <div className="row">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 style={{ cursor: 'pointer' }} className="panel-title" onClick={this.showContact.bind(this)}>{fullName}</h3>
                        </div>
                        <div className="panel-body">
                            {
                                (this.state.showContactToggle) ?
                                    (
                                        <ul className="list-group">
                                            <li className="list-group-item">{fullName}
                                                <button onClick={this.onDeleteContact} className="btn btn-sm btn-danger pull-rigth">X</button>
                                            </li>
                                            <li className="list-group-item">{email}</li>
                                        </ul>
                                    )
                                    : null
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

Contact.propTypes = {
    data: PropTypes.object.isRequired,
    deleteContactFromChild: PropTypes.func.isRequired
}
export default Contact

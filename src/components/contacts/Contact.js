import React, { Component } from 'react';

class Contact extends Component {

    state = {
        showContactToggle: true
    }
    showContact() {
        this.setState({
            showContactToggle: !this.state.showContactToggle
        })
    }
    render() {
        const { fullName, email } = this.props.data;
        return (
            <>
                <div className="row">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 style={{ cursor:'pointer'}} className="panel-title" onClick={this.showContact.bind(this)}>{fullName}</h3>                            
                        </div>
                        <div className="panel-body">
                            {(this.state.showContactToggle) ?
                                (
                                    <ul className="list-group">
                                        <li className="list-group-item">{fullName}</li>
                                        <li className="list-group-item">{email}
                                        </li>
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

export default Contact

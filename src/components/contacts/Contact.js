import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const { fullName, email } = this.props;
        return (
            <>

                <div className="row">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Contact</h3>
                        </div>
                        <div className="panel-body">
                            <ul>
                                <li>{fullName}</li>
                                <li>{email}</li>
                            </ul>

                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Contact

import React, { Component } from 'react'

const Context = React.createContext();;

export class Providers extends Component {

    state = {
        contacts: [
            { id: 1, fullName: "Zouhair ettarak", email: "ettarak.zouhair@gmail.com" },
            { id: 2, fullName: "Hafssa", email: "hafssa@dell.com" }
        ]
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                    {this.props.children}
            </Context.Provider>
        )
    }
}
import React, { Component } from 'react'
import TopNavBar from "../topNavBar"

class Contacts extends Component {

    render() { 
        return ( 
            <div>
                <TopNavBar />
                <h1>Contact</h1>
                <h3>Email: sampleapp@sampleapp.com</h3>
                <h4>phone: +919004768502</h4>
            </div>

         );
    }
}
 
export default Contacts
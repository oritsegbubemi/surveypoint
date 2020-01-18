import React, { Component } from 'react';
import Fire from '../../config/Fire';
import Button from "../../components/button/Button";
import Navbar2 from "../../components/navbar2/Navbar2";
import "./Logout.css";

class Logout extends Component {

  logout() {
    Fire.auth().signOut()
    .then(() => {
      console.log('Successfully Logged Out');
      this.props.history.push('/')
    })
    .catch((err) => {
      console.log('Error: ' + err.toString());
    })
  }


  render() {
    return (
      <div>
        <Navbar2 />
      <div className="logout-button-container">
        <h1>You Are Logged In</h1>
        <Button 
        customClassName="regular-button" onclick = {this.logout.bind(this)}>
            Logout
          </Button>
      </div>
      </div>
    )
  }
}

export default Logout;

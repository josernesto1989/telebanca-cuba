import React from 'react';
import './navVIP.css';
// import './navVIP.js';

class NavResponsiveVIP extends React.Component {
  render() {

    return (      
        <header>
        <h1 class="logo">LOGO</h1>
        <ul class="nav">
            <li class="navlink"><a href="#">Home</a></li>
            <li class="navlink"><a href="#">About</a></li>
            <li class="navlink"><a href="#">Projects</a></li>
            <li class="navlink"><a href="#">Contact</a></li>
        </ul>
        <div class="burger">
            <i class="fas fa-bars"></i>
        </div>
    </header>
          );
  }
}

export default NavResponsiveVIP;
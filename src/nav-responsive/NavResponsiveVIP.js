import React from 'react';
import './navVIP.css';
import './navVIP.js';

class NavResponsiveVIP extends React.Component {
  render() {

    return (      
        <header>
        <i class="fa fa-bars bars-button" aria-hidden="true" id="bars-button"></i>
<div class="navbar">
    <div class="contenido">
        <nav class="bars">
            <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Categorías</a></li>
                <li><a href="#">Sobre mi</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

        <div class="title">
            <a href="#">
            	<h2>NAVBAR</h2>
            </a>
        </div>
    </div>
</div>
    </header>
          );
  }
}

export default NavResponsiveVIP;
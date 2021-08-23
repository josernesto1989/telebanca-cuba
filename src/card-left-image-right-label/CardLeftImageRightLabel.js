import React from 'react';
import './Card.css';
import avatar from './img_avatar2.png';

class CardLeftImageRightLabel extends React.Component {
  render() {

    return (
      
      <div class="card">
      <img src={avatar} alt="Avatar" />
      <div class="cardcontainer">
        <div class="card-text-main">
          <strong>{ this.props.title}</strong>
        </div>
        <div class="card-text-second">
        { this.props.description}
         </div>
      </div>
      </div>
          );
  }
}

export default CardLeftImageRightLabel;
import React from 'react';
import './Card.css';
import avatar from './img_avatar2.png';

class CardLeftImageRightLabel extends React.Component {
  render() {

    return (
      
      <div className="card">
      <img src={avatar} alt="Avatar" />
      <div className="cardcontainer">
        <div className="card-text-main">
          <strong>{ this.props.title}</strong>
        </div>
        <div className="card-text-second">
        { this.props.description}
         </div>
      </div>
      </div>
          );
  }
}

export default CardLeftImageRightLabel;
import React from 'react';
import './Card.css';
import avatar from './../money-dollar-sign-in-a-square-svgrepo-com.svg';

class CardLeftImageRightLabel extends React.Component {
  render() {

    return (
      <a href={this.props.link}>
        <div className="card" >
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
      </a>
    );
  }
}

export default CardLeftImageRightLabel;
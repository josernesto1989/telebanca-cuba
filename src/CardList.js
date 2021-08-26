import React from 'react';
import CardLeftImageRightLabel from './card-left-image-right-label/CardLeftImageRightLabel';

class CardList extends React.Component {
    
  render() {

    return (
        
        <div id="main-container">{
            this.props.actions.map((action) =>
        <CardLeftImageRightLabel title={action.title} description={action.title} link={action.title}></CardLeftImageRightLabel> )  
  }
      </div>
          );
  }
}

export default CardList;
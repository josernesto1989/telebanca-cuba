import logo from './logo.svg';
import './App.css';
import './card-left-image-right-label/CardLeftImageRightLabel';
import CardList from './CardList';
import { slide as Menu } from 'react-burger-menu'
import CardLeftImageRightLabel from './card-left-image-right-label/CardLeftImageRightLabel';
// import NavResponsiveVIP from './nav-responsive/NavResponsiveVIP'

function App() {
  const actions = [
    {
      title:"Jane Doe",
      description:"this is the description",
      link:"tel:/*222#",
      icon:""
    },
    {
      title:"John Doe",
      description:"this is the description",
      link:"tel:/*222#",
      icon:""
    },{
      title:"Dayan Doe",
      description:"this is the description",
      link:"tel:/*222#",
      icon:""
    },{
      title:"Jorge Doe",
      description:"this is the description",
      link:"tel:/*222#",
      icon:""
    },{
      title:"Ale Doe",
      description:"this is the description",
      link:"tel:/*222#",
      icon:""
    },{
      title:"Jose Doe",
      description:"this is the description",
      link:"tel:/*222#",
      icon:""
    },
    {
      title:"Alayn Doe",
      description:"this is the description",
      link:"tel:/*222#",
      icon:""
    }



  ];
  return (
    <div className="App">
      <header className="App-header">

      <Menu noOverlay >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <CardLeftImageRightLabel title="Jane Doe" description="this is the description" link="tel:/*222#"></CardLeftImageRightLabel>
      </Menu>
      
      <CardList actions={actions} ></CardList>
      
      </header>
      
    </div>
  );
}

export default App;

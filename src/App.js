import logo from './logo.svg';
import './App.css';
import './card-left-image-right-label/CardLeftImageRightLabel';


import CardLeftImageRightLabel from './card-left-image-right-label/CardLeftImageRightLabel';
// import NavResponsiveVIP from './nav-responsive/NavResponsiveVIP'

function App() {
  return (
    <div className="App">
      <header className="App-header">
   
      
      <CardLeftImageRightLabel title="Jane Doe" description="this is the description"></CardLeftImageRightLabel>
      <CardLeftImageRightLabel title="trav" description="T1"></CardLeftImageRightLabel>
      <CardLeftImageRightLabel title="Jane Doe" description="this is the description"></CardLeftImageRightLabel>
      <CardLeftImageRightLabel title="Jane Doe" description="this is the description"></CardLeftImageRightLabel>
      <CardLeftImageRightLabel title="Jane Doe" description="this is the description"></CardLeftImageRightLabel>
      </header>
      
    </div>
  );
}

export default App;

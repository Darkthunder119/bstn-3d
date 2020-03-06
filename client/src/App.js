import React from 'react';
import './App.scss';
import Main from './components/main/Main.js'
<<<<<<< HEAD
import Card2 from './components/card2/Card2'
import Card1 from './components/card1/Card1'
import Card3 from './components/card3/Card3'
=======
import CardMedium from './components/cardMedium/CardMedium'
import CardLarge from './components/cardLarge/CardLarge'
import CardSmall from './components/cardSmall/CardSmall'
>>>>>>> 3a2ddccbe1325bc340d22fe3af43f1b8548182cb
import Footer from '../src/components/Footer/Footer'
import Iframe from 'react-iframe'
import Header from '../src/components/Header/Header'
import Nav from '../src/components/Nav/Nav'
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>Website Title</title>
      </Helmet>

      <Header />
      <Nav />
      <Main />
      <div className="App__cardContent">
          <div className="App__column1">
            <Card1 /> 
            
          </div>
          <div className="App__column2">
            <Card2 />
          </div>
          <div className="App__column3">
            <Card3 />
          </div>
      </div>
      <Footer />
      {/* <Iframe url="https://darkthunder119.github.io/"
        width="700px"
        height="500px"
        id="myId"
        className="iFrame"
        display="initial"
        position="relative"/> */}
    </div>
  );
}

export default App;

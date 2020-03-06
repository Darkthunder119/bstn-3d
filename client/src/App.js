import React from 'react';
import './App.scss';
import Main from './components/main/Main.js'
import CardMedium from './components/cardMedium/CardMedium'
import CardLarge from './components/cardLarge/CardLarge'
import CardSmall from './components/cardSmall/CardSmall'
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
            <CardMedium /> 
            <CardSmall />
            <CardMedium />
          </div>
          <div className="App__column2">
            <CardMedium />
            <CardLarge />
          </div>
          <div className="App__column3">
            <CardLarge />
            <CardMedium />
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

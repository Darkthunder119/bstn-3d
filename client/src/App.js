import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from './components/main/Main.js'
import CardMedium from './components/cardMedium/CardMedium'
import CardLarge from './components/cardLarge/CardLarge'
import CardSmall from './components/cardSmall/CardSmall'


import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>Blog-iNDy</title>
      </Helmet>
      <Main />
      <div className="App__cardContent">
          <div className="app__column1">

          </div>
        <CardMedium />
        <CardLarge />
        <CardLarge />
        <CardSmall />
      </div>
    </div>
  );
}

export default App;

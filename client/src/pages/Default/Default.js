import React from 'react';
import '../../App.scss';
import Main from '../../components/main/Main.js'
import CardMedium from '../../components/cardMedium/CardMedium'
import CardLarge from '../../components/cardLarge/CardLarge'
import CardSmall from '../../components/cardSmall/CardSmall'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Nav from '../../components/Nav/Nav'
import { Helmet } from 'react-helmet';

function Default() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>SEAMLIST</title>
      </Helmet>

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
    </div>
  );
}

export default Default;
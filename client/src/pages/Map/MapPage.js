import React from 'react';
import '../../App.scss';
import Main from '../../components/main/Main.js'
import Iframe from 'react-iframe'

import { Helmet } from 'react-helmet';

function MapPage() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>SEAMLIST</title>
      </Helmet>


      <Main>
        <Iframe url="https://darkthunder119.github.io/"
        className="iFrame"
        display="initial"
        position="relative"/>
      </Main>      

    </div>
  );
}

export default MapPage;

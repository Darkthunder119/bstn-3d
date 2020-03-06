import React from 'react';
import './App.scss';
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

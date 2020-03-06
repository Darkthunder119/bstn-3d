import React from 'react';
import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom'
import Default from '../src/pages/Default/Default'
import MapPage from '../src/pages/Map/MapPage'
import Header from '../src/components/Header/Header'
import Nav from '../src/components/Nav/Nav'
import Footer from '../src/components/Footer/Footer'

function App() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <BrowserRouter>
          <Header />
          <Nav />
          <Route exact path="/" component={Default}/>
          <Route path="/map" component={MapPage}/>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

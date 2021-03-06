import React from "react";
import "../../App.scss";
import Main from "../../components/main/Main.js";
import Card1 from "../../components/card1/Card1";
import Card2 from "../../components/card2/Card2";
import Card3 from "../../components/card3/Card3";
import Card4 from "../../components/card4/Card4";
import Card5 from "../../components/card5/Card5";
import Card6 from "../../components/card6/Card6";

import { Helmet } from "react-helmet";

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
      <div className="maintest">
        <h1 className="maintest__head">Connecting the trendiest restaurants to today’s influencers.</h1>
        <p className="maintest__p">
          Sign up now to join our elite platform of brands and influencers!
          Verification based on your audience size and engagement level will
          give you access to perks and sponsorship deals with some of the top
          restaurants around the world. Start creating content on all social
          media platforms to expand your brand while connecting with the
          restaurants of your choosing.
        </p>
      </div>
      <div className="App__cardContent">
        <div className="App__column1">
          <Card1 />
          <Card2 />
        </div>
        <div className="App__column2">
          <Card3 />
          <Card4 />
        </div>
        <div className="App__column3">
          <Card5 />
          <Card6 />
        </div>
      </div>
    </div>
  );
}

export default Default;

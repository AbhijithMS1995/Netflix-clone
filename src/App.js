import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
import {actions , orginals,comedyMovies,horror,romance,documentaries} from './urls'




function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Banner />
      <Rowpost url={orginals} title='Netflix Orginals' />
      <Rowpost url={actions} title = 'Action' isSmall />
      <Rowpost url={comedyMovies} title = 'Comedy Movies' isSmall />
      <Rowpost url={horror} title = 'Horror Movies' isSmall />
      <Rowpost url={romance} title = 'Romantic Movies' isSmall />
      <Rowpost url={documentaries} title = 'Documentaries' isSmall />
  </div>

  );
}

export default App;

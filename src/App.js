import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Cars from './Components/Cars';
import Sailboats from './Components/Sailboats';
import Bikes from './Components/Bikes';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import SearchBar from './Components/SearchBar';
import './App.css'


  // axios.get('https://api.flickr.com/services')
  //   .then(response => {
  //     this.setState({
  //       photos: response.data.data
  //     });
  //   })
  //   .catch(error => {
  //     console.log('Error fetching and parsing data', error);
  //   });



function App() {
  return (
    <BrowserRouter>
    <div className="container">
        <Header />
        {/* Routes replaced switch in react-router-dom v6 */}
        <Routes>
            <Route exact path="/" element={<Cars />} />
            <Route path="/boats" element={<Sailboats />} />
            <Route path="/bikes" element={<Bikes />} />
            <Route path="/searchbar" element={<SearchBar placeholder="Happy Exploring..."/>} />
            <Route path="/" element={<NotFound />} />
        </Routes>
    </div>   
</BrowserRouter> 
  );
}

export default App;

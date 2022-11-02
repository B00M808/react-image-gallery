import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import PhotoContainer from './Components/PhotoContainer';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
        <Header />
        {/* Routes replaced switch in react-router-dom v6 */}
        <Routes>
            <Route path="/" element={<PhotoContainer tag={"cars"} />} />
            <Route path="/boats" element={<PhotoContainer tag={"boats"}/>} />
            <Route path="/bikes" element={<PhotoContainer tag={"bikes"} />} />
            <Route path="/searchbar" element={<SearchBar placeholder="Happy Exploring..."/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>   
</BrowserRouter> 
  );
}

export default App;

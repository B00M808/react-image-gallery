import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import PhotoContainer from './Components/PhotoContainer';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    setSearchTerm('cars');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <BrowserRouter>
    <div className="container">
    
        <SearchBar setSearchTerm={setSearchTerm} />
        <Header />
        {/* Routes replaced switch in react-router-dom v6 */}
        <div className="photo-container">
        <Routes>
            <Route path="/" element={<PhotoContainer tag={"cars"} />} />
            <Route path="/boats" element={<PhotoContainer tag={"boats"}/>} />
            <Route path="/bikes" element={<PhotoContainer tag={"bikes"} />} />
            <Route path="/search/:searchTerm" element={<PhotoContainer tag={searchTerm}/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
    </div>   
</BrowserRouter> 
  );
}

export default App;

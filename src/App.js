import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import PhotoContainer from './Components/PhotoContainer';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import SearchBar from './Components/SearchBar';
import apiKey from './config'

const App = () => {
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    const getFlickrData = async () => {
      try {
        await fetchImages(searchTerm)
      } catch(error) {
        console.error("Error fetching data: ", error)
      } 
    }
    getFlickrData()
  },);

  const fetchImages = (searchTerm) => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
      .then((resp) => resp.json())
      .then((data) => {
          return data.photos.photo
      })
    }

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







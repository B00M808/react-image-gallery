import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate, useLocation } from 'react-router-dom'

function SearchBar({ setSearchTerm }) {
    /*const [value, setValue] = useState("");*/
    const [term, setTerm] = useState('')
    const navigate = useNavigate()
    const { pathname } = useLocation()
  
    useEffect(() => {
      setSearchTerm(decodeURI(pathname.replace('/search/', '')))
    }, )
  
    const handleSubmit = e => {
      e.preventDefault()
      navigate(`/search/${term}`)
      setSearchTerm(term)
      setTerm('')
    }

    /* React Icons imported for the search bar*/
    return (
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="search" name="search" placeholder="Happy Exploring..." id="search"  required 
          value={term} onChange={e => setTerm(e.target.value)}
        />
        <button type="submit" className="search-button"><AiOutlineSearch /></button>
      </form>
    )
}

export default SearchBar;

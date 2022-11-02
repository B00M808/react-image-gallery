import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <ul className="main-nav">
            <li><Link to="/">Cars</Link></li>
            <li><Link to="/boats">Sailboats</Link></li>
            <li><Link to="/bikes">Bikes</Link></li>
        </ul>
    )
}

export default Nav
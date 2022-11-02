import React from 'react';
import { NavLink, Route } from 'react-router-dom';


const Destinations = ({match}) => (
    <div className='main-content destinations'>
        <div className="destinations-header group">
        <h2>Destinations</h2>
        <ul className="destinations-nav">
            <li><NavLink to={`${match.url}/cars`}>Cars</NavLink></li>
            <li><NavLink to={`${match.url}/sailboats`}>Sailboats</NavLink></li>
            <li><NavLink to={`${match.url}/bikes`}>Bikes</NavLink></li>
        </ul>
        </div>

        {/*Routes Go Here*/}
        {/* <Route path={`${match.path}/Cars`} element={Grenada} />
        <Route path={`${match.path}/Sailboats`} element={Guyana} />
        <Route path={`${match.path}/Bikes`} element={Travel} /> */}
    </div>
);

export default Destinations;
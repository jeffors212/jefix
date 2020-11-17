import React from 'react';
import JEFLIX from '../../assets/img/JEFLIX.png';
import './Menu.css';
function Menu (){
    return(
        <nav className="Menu">
            <a href= "/">
            <img className="Logo" src={JEFLIX} alt="estudo logo"/>
            </a>
        </nav>

    );
}

export default Menu;
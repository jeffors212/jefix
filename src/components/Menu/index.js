import React from 'react';
import JEFLIX from '../../assets/img/JEFLIX.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
function Menu (){
    return(
        <nav className="Menu">
            <a href= "/">
            <img className="Logo" src={JEFLIX} alt="estudo logo"/>
            </a>
            
            <ButtonLink className="ButtonLink"href="/">
                Novo Video
            </ButtonLink>

        </nav>

    );
}

export default Menu;
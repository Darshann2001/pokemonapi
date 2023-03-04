import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className="nav-parent">
            <div className="container">
                <div className="wrapper">
                    <div className='navbar'>
                        <h1>
                            <img src={logo} alt="pokedex" />
                        </h1>
                        <a href="https://pokeapi.co/" target='_blank'>
                            <p>Get Api</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;

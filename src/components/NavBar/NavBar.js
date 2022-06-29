import React  from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../logo/logo';


const NavBar = () => {
    return (
        
    <ul className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <Logo />
        <li>Nosotros</li>
        <li>Productos</li>
        <li>Contacto</li>
        <CartWidget />
        
    </ul>
    )
}

export default NavBar;
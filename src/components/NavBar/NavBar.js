import React  from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';


const NavBar = () => {
    return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>  
        <Logo />  
            <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>    
                <li>Nosotros</li>
                <li>Productos</li>
                <li>Contacto</li>   
            </ul>
        <CartWidget />
    </div>
    )
}

export default NavBar;
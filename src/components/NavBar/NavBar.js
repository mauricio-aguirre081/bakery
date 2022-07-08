import React  from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';


const categories = [
    {
        id: 1,
        path: '/',
        name: 'Home',
    },
    {
        id: 2,
        path: '/category/salado',
        name: 'salado',
    },
    {
        id: 3,
        path: '/category/dulce',
        name: 'dulce',
    },
    {
        id: 4,
        path: '/category/pizza',
        name: 'pizza',
    },
];

const NavBar = () => {
    return (
        <nav>
            <Logo />
            <h2>Delicias del Norte</h2>
            <ul id='lista-nav'>
                {categories.map((category) => (
                    <Link to={category.path} key={category.id}>
                        {category.name}
                    </Link>
                ))}
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;

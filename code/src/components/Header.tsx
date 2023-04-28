import React from 'react';
import '../styles.css';


function Header() {
    return(
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/create">Create</a></li>
                <li><a href="/sets">Sets</a></li>
            </ul>
        </nav>
    );
}

export default Header;
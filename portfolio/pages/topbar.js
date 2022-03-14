import React from 'react';
import Line from './line';

export default function Topbar() { 
    return(
        <nav>
            <Line/>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Contact</a></li>
            </ul>
            <Line/>
        </nav>
    )
}
import React from 'react';
import Line from './line';
import Link from 'next/link'

export default function Topbar() { 
    return(
        <nav>
            <Line/>
            <ul>
                <li><Link href='/'><a>Home</a></Link></li>
                <li><Link href='/#About'><a>About</a></Link></li>
                <li><Link href='/#Contact'><a>Contact</a></Link></li>
            </ul>
            <Line/>
        </nav>
    )
}
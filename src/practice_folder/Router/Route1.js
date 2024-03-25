import React from 'react';
import {Link} from 'react-router-dom';

export default function Route1(){

    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>home</Link>
                    </li>
                    <li>
                        <Link to={'/route-1'}>Route 1</Link>
                    </li>
                    <li>
                        <Link to={'/route-2'}>Route 2</Link>
                    </li>
                </ul>
            </nav>
            this is Route 1 page
        </div>
    )
}
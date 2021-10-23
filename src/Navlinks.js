
import React from 'react'
import {Link} from 'react-router-dom'
import './Navlinks.css'

function Navlinks(){

    return(
        <div className="navlinks">
            <div className="navlinks__outer">
                <div className="NavLinks__inner">
                <Link >
        About WebSite team
                </Link>
                <Link>
        Our Customers
                </Link>
                <Link>
       New Prodcuts
                </Link>
                <Link>
        Contact with WebSite Member
                </Link>
                </div>
        
            </div>
        </div>
    )
}

export default Navlinks
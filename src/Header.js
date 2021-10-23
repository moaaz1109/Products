import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css';
import { Link } from  'react-router-dom'







function Header(){


    return(
        <nav className="header">
<img className="header__Logo" alt="" src="/images/ICON.png"/>
<div className="header__search">

    <input type="text" className="header__seacrhInput"/>

   <SearchIcon className="header__SearchIcon"/>
</div>
<div className="Sign-part">
<img className="header__Log"  src="/images/Log.png"/>
<Link to="/" className="header__Link">
<div className="Sign-in">
  <a href="/">Sign-in</a> 
</div>
  </Link>
  </div>
  <Link to="/" className="header__Link">
 
  </Link>
  <div className="Sign-part">
  <img className="header__Log"  src="/images/hom.png"/>
<div className="Home_page">
  <a href="/">Home-Page</a>
</div>
</div>
            </nav>
    
    );
}

export default Header
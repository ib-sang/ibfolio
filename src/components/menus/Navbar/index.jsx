import React, {useState} from 'react';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    const [menuActive, setMenuActive] = useState(false)
    const {pathname} = useLocation();

    const isSubPath = ($subpath) =>{
        return pathname.indexOf($subpath) !==-1
    }

    const handleMenuActive = () => {
        if(menuActive){
            setMenuActive(false);
        }else{
            setMenuActive(true);
        }
    }

    const classWrap = menuActive ? "navbar is-active": "navbar";

    return (

        <div className={classWrap}>
            <div className="navbar-brand">
                <div className="navbar-brand-logo">
                    <Link to="/" ><img src="./logo.png" alt="folio IB" className="logo"/></Link>
                </div>
                <div className="navbar-menu">
                    <nav className="nav-collapse">
                        <ul className="navbar-items">
                            <li className="navbar-item"><Link to="/" className={pathname ==='/' ? 'active': ''}>Home</Link></li>
                            <li className="navbar-item"><Link to="/contactme" className={isSubPath('contactme') ? 'active' : ''}>Contact me</Link></li>
                            <li className="navbar-item"><Link to="/aboutme" className={isSubPath('aboutme') ? 'active' : ''}>About me</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="navbar-langue">
                    <ul className="navbar-langue-items">
                        <li className="navbar-langue-item"><Link to="" className="navbar-langue-link">FR</Link></li>
                        <li className="navbar-langue-item"><Link to="" className="navbar-langue-link">EN</Link></li>
                    </ul>
                </div>
                <div className="navbar-toolbar-menu" onClick={ handleMenuActive }>
                    <span className="navbar-toolbar-menubar"></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar

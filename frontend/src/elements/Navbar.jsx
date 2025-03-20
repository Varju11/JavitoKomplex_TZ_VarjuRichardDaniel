import React from "react";
import { Link, NavLink } from 'react-router-dom'
import '../styles/header.css'

const Navbar = (() => {
    return (
        <div className="mb-5">
            <img src="/oktatas.jpg" className="fejlec" />
            <nav className="bg-white black-80 tc pv4 avenir">
                <div className="bt bb tc mw7 center mt4">
                    <NavLink className="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" to="/">Főoldal</NavLink>
                </div>
            </nav>
        </div>
    )
})

export default Navbar
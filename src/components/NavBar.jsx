import { NavLink } from "react-router-dom";

import React from 'react'

export default function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>

            <NavLink exact to="/random-beer">Random beer</NavLink>

            <NavLink exact to="/new-beer">New beer</NavLink>
        </nav>
    )
}

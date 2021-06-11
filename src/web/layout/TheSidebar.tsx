import * as React from 'react'
import { NavLink } from 'react-router-dom'
export const TheSidebar = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/dashboard" activeClassName="active">
                            <span data-feather="home"></span>Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/users" activeClassName="active">
                            <span data-feather="user"></span>Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/lyric" activeClassName="active">
                            <span data-feather="code"></span>lyrics
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

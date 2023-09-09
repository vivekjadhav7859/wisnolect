import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>We are sorry, page not found</h2>
                    <p>The page you are looking for ha sbeen removed, had its name changed or its temporarily not available</p>
                    <NavLink to="/">Back to home page</NavLink>
                </div>
            </div>
        </>
    )
}

export default Error404

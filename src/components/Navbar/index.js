import './styles.css'
import React from 'react'
import { NavLink } from "react-router-dom";

function index() {
    return (
        <div className='nav'>
            <p className='title'>Marvel's Heroes</p>
            <NavLink to="/Create"><button className='button'><i className="fas fa-plus"></i></button></NavLink>
        </div>
    )
}

export default index

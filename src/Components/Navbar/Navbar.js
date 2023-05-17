import React from 'react'
import style from './Navbar.module.css'
import { FiChevronDown } from 'react-icons/fi'
import { MdSearch } from 'react-icons/md'
function Navbar() {
    return (
        <div className={style.navcontainer}>
            <div className={style.rightpart}>
                <h2>EDYODA</h2>
                <h5>Courses <FiChevronDown /></h5>
                <h5>Program <FiChevronDown /></h5>
            </div>
            <div className={style.endpart}>
                <p><MdSearch /></p>
                <button className={style.btn1}>Log In</button>
                <button className={style.btn2}>JOIN NOW</button>
            </div>
        </div>
    )
}

export default Navbar
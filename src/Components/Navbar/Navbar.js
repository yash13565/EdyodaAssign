import React from 'react'
import style from './Navbar.module.css'
function Navbar() {
    return (
        <div className={style.navcontainer}>
            <div className={style.rightpart}>
            <h2>EDYODA</h2>
            <h5>Courses</h5>
            <h5>Program</h5>
            </div>
            <div className={style.endpart}> 

            </div>
        </div>
    )
}

export default Navbar
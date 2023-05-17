import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import style from './Home.module.css'
import { FaRupeeSign } from 'react-icons/fa'
import { FaRegClock } from 'react-icons/fa'
import { MdOutlineMenuBook } from 'react-icons/md'
import { MdLiveTv } from 'react-icons/md'
import { FaGraduationCap } from 'react-icons/fa'
import { ImBlocked } from 'react-icons/im'
import Payment from '../Components/Payment/Payment'
function Home() {
    return (
        <div className={style.maincontainer}>
            <Navbar />
            <div className={style.content}>
                <p className={style.para}>Access curated courses worth <span className={style.rupespan}><sub><FaRupeeSign /></sub>18,500</span> at just <span style={{ color: '#0096FF' }}><sub><FaRupeeSign /></sub>99</span> per year!</p>
                <ul className={style.mainlist}>
                    <li ><MdOutlineMenuBook className={style.icons} /><span style={{ color: '#0096FF' }}> 100+ </span>&nbsp;Job releveant Courses</li>
                    <li><FaRegClock className={style.icons} /><span style={{ color: '#0096FF' }}>20,000+</span> &nbsp; Hours of content</li>
                    <li><MdLiveTv className={style.icons} /><span style={{ color: '#0096FF' }}>Exclusive</span> &nbsp;webinar Access</li>
                    <li><FaGraduationCap className={style.icons} />Scolarship worth <span style={{ color: '#0096FF' }}> &nbsp;94,500</span></li>
                    <li><ImBlocked className={style.icons} /><span style={{ color: '#0096FF' }}>Ad Free</span>&nbsp; learning experience</li>
                </ul>
            </div>
            <Payment/>
        </div>
    )
}

export default Home
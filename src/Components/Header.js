import React from 'react'
import img from '../Images/b1.png'
import header from '../styles/header.css'

const Header = () => {
  return (
    <div>
        <header>
            <div className='offercontent'>

                <h3>Wake up and Make up</h3>

            </div>
            <div className='headercontent'>

                <figure className='headerimg'>
                    <img src={img} alt="" />
                </figure>      

            </div>

            {/* <div>
                <label htmlFor=""></label>
                <div className='shopping'>
                    <li><i class="fi fi-rr-search"></i></li>
                    <li><i class="fi fi-rr-shopping-cart"></i></li>
                    <li><i class="fi fi-br-menu-burger"></i></li>
                </div>
            </div> */}

            <nav className='navbar'>
                

                <li><a href="">Price</a></li>
                <li><a href="">Design</a></li>
                <li><a href="">Shopping </a></li>
                <li><a href="">Wedding</a></li>
                
            </nav>
        </header>
        {/* <h1>make good</h1> */}
    </div>
  )
}

export default Header
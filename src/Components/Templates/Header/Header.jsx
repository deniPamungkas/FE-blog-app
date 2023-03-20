import React from 'react'
import background from '../../../Assets/images/background-header.jpg'
import './Header.scss'

const Header = () => {
  return (
    <section className="header">
        <div className='jumbotron'>
            <img src={background} alt="background" />
            <div className="meta">
                <h1>DENI.</h1><p>Make and Write your experience</p>
            </div>
        </div>
    </section>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <>
    <header className="header">
    <div className="container flex align-center">
        <div className="head-wr flex align-center">
            <div className="logo">
                <a href="/"><img src="/assets/images/FANTUNEZ_LOGO.png" alt="" /></a>
            </div>
            <div className="navigation">
                <ul className="flex">
                    <li className="active"><Link to="/">HOME</Link></li>   
                    <li><Link to="/whitepaper">WHITEPAPER</Link></li>   
                    <li><Link to="/token">TOKENS</Link></li>   
                    <li><Link to="/collection">COLLECTION</Link></li>   
                </ul>
            </div>
        </div>
        <div className="search-wr">
            <ul className="flex align-center">
                <li>
                    <a href="#" className="search"><i className="fa fa-search"></i></a>
                </li>
                <li>
                    <a href="#" className="primary-btn">EXPLORE</a>
                </li>
            </ul>
        </div>
    </div>
    </header>
    </>

  )
}

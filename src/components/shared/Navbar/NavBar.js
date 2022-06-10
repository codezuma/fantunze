import React from 'react'

export default function NavBar() {
  return (
    <>
    <header className="header">
    <div className="container flex align-center">
        <div className="head-wr flex align-center">
            <div className="logo">
                <a href="/"><img src="assets/images/FANTUNEZ_LOGO.png" alt="" /></a>
            </div>
            <div className="navigation">
                <ul className="flex">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">WHITEPAPER</a></li>
                    <li><a href="#">TOKENS</a></li>
                    <li><a href="#">COLLECTION</a></li>   
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

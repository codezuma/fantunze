import React from 'react'

export default function Footer() {	
  return (
<footer className="footer">
	<div className="container">
		<div className="newsletter-wrapper">
			<h2>SUBSCRIBE TO NEWSLETTER</h2>
			<div className="newsletter">
				<input type="text" name="news_email"  placeholder="Enter your email address" />
				<input type="submit" className="primary-btn" value="Join us!" />
			</div>
		</div>
		<div className="footer-widget flex">
			<div className="footer footer1">
				<a href="#">
					<img src="/assets/images/Group 3186.png" /></a>
			</div>
			<div className="footer footer2">
				<div className="nav">
					<h3>ABOUT</h3>
					<ul>
						<li><a href="#">Library</a></li>
						<li><a href="#">Explore All</a></li>
						<li><a href="#">Collection</a></li>
						<li><a href="#">Access</a></li>
						<li><a href="#">Blog</a></li>
					</ul>
				</div>
				<div className="nav">
					<h3>CONNECT</h3>
					<ul>
						<li><a href="#">My Profile</a></li>
						<li><a href="#">FAQ's</a></li>
						<li><a href="#">Discord</a></li>
						<li><a href="#">Contact</a></li>
						<li><a href="#">Gift Goat</a></li>
					</ul>
				</div>
				<div className="nav">
					<h3>FANTUNEZ</h3>
					<ul>
						<li><a href="#">Token</a></li>
						<li><a href="#">VaynerNFT</a></li>
						<li><a href="#">Mini Drops</a></li>
						<li><a href="#">Auctions</a></li>
						<li><a href="#">Garyvayner</a></li>
					</ul>
				</div>
			</div>
			<div className="footer footer3">
				<h3>Follow us</h3>
				<ul className="social-icons">
					<li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
					<li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
					<li><a href="#" target="_blank"><i className="fa fa-facebook"></i></a></li>
				</ul>
			</div>
		</div>
		<div className="copyright">
			<p>©2022 FANTUNEZ | Privacy Policy</p>
		</div>
	</div>
</footer>
  )
}

import React, { useEffect } from 'react'

export default function FaqSection() {
	useEffect(() => {
		var acc = document.getElementsByClassName("accordion");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function () {
				let nextSibling = this.nextElementSibling;
				nextSibling.classList.toggle("pb-20");
				this.classList.toggle("focus");
				var panel = this.nextElementSibling;
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			});
		}



	})
	return (

		<section className="faq-wrapepr">
			<div className="container">
				<div className="faq-info">
					<h2>FREQUENTLY <br />ASKED <br />QUESTIONS</h2>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
				</div>
				<div className="faqs">
					<div className="faq">
						<button className="accordion">WHAT IS FANTUNEZ?</button>
						<div className="panel">
							<p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
						</div>
					</div>
					<div className="faq">
						<button className="accordion">WHY NFT'S?</button>
						<div className="panel">
							<p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
						</div>
					</div>
					<div className="faq">
						<button className="accordion">WHAT IS COIN?</button>
						<div className="panel">
							<p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
						</div>
					</div>
					<div className="faq">
						<button className="accordion">WHAT IS SO SPECIAL ABOUT THIS?</button>
						<div className="panel">
							<p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
						</div>
					</div>
					<div className="faq">
						<button className="accordion">WHERE CAN I INTERECT WITH OTHER?</button>
						<div className="panel">
							<p>It is a long established fact that a reader will be distracted by the readable content of a page.</p>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

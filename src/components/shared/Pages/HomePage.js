import React, { useCallback, useEffect } from 'react';

import OwlCarousel from 'react-owl-carousel';  

const productsCarasol = {
    margin: 0,
    center: true,
    loop: true,
    nav: false,
    dots:false,
    responsive: {
    0: {
    items: 1
    },
    768: {
    items: 2,
    margin: 15,
    },
    1000: {
    items: 3,
    }
    }
};
const recentSlider = {
    center: true,
    items:2,
    loop:true,
    margin:10,
    nav: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.custom-nav',
    responsive:{
        600:{
            items:4
        }
    }
};
export default function HomePage() {
    useEffect(()=>{},[])
    return (
        <>
            <section className="main-banner">
                <div className="banner-wr">
                    <div className="heading-wrapper">
                        <h1>welcome to <span>fantunez.</span></h1>
                        <p>An Initiative to monetize for creators using web 3.0</p>
                        <div className="btn-wr">
                            <a href="/" className="primary-btn">START COLLECTING</a>
                            <a href="/" className="secondary-btn">EXPLORE</a>
                        </div>
                    </div>
                    <div className="slider-wr">
                        <OwlCarousel {...productsCarasol} className="products owl-carousel" >
                            <div className="product">
                                <img src="assets/images/laurence-cruz-P7yvmajPvkM-unsplash.png" />
                                <div className="product-info">
                                    <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" className="auth topmove" />

                                    <h3>Wise Wasp</h3>
                                    <p className="type">Ξ 16.6 $57,453.32</p>
                                </div>
                            </div>
                            <div className="product">
                                <img src="assets/images/aiony-haust-3TLl_97HNJo-unsplash.png" />
                                <div className="product-info">
                                    <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" className="auth topmove" />

                                    <h3>Wise Wasp</h3>
                                    <p className="type">Ξ 16.6 $57,453.32</p>
                                </div>
                            </div>
                            <div className="product">
                                <img src="assets/images/austin-wade-d2s8NQ6WD24-unsplash.png" />
                                <div className="product-info">
                                    <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" className="auth topmove" />

                                    <h3>Wise Wasp</h3>
                                    <p className="type">Ξ 16.6 $57,453.32</p>
                                </div>
                            </div>
                            <div className="product">
                                <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" />
                                <div className="product-info">
                                    <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" className="auth topmove" />

                                    <h3>Wise Wasp</h3>
                                    <p className="type">Ξ 16.6 $57,453.32</p>
                                </div>
                            </div>
                            <div className="product">
                                <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" />
                                <div className="product-info">
                                    <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" className="auth topmove" />

                                    <h3>Wise Wasp</h3>
                                    <p className="type">Ξ 16.6 $57,453.32</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>

            <section className="blog-wrapper divide-sec">

                <div className="container">
                    <div className="blog-section">
                        <div className="sec-head"><span>OUR BLOGS</span></div>
                        <div className="blog">
                            <div className="blog-img">
                                <img src="assets/images/osman-rana-TvTOIfMeGI8-unsplash.png" alt="" />
                                <a href="/"></a>
                            </div>
                            <h3>It is a long established fact that a reader will be distracted by the readable</h3>
                            <span>Jhon Fernandez <span className="date">25/02/2022</span></span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cum! Culpa, quas inventore, eos ea consequatur sequi, at quasi eveniet</p>
                            <a href="/">Continue Reading</a>
                        </div>
                        <div className="blog">
                            <div className="blog-img">
                                <img src="assets/images/keagan-henman-qS7H4QV18Y4-unsplash.png" alt="" />
                                <a href="/"></a>
                            </div>
                            <h3>It is a long established fact that a reader will be distracted by the readable</h3>
                            <span>Jhon Fernandez <span className="date">25/02/2022</span></span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, cum! Culpa, quas inventore, eos ea consequatur sequi, at quasi eveniet</p>
                            <a href="/">Continue Reading</a>
                        </div>
                    </div>
                    <div className="price-section">
                        <div className="sec-head"><span>CURRENT FLOOR PRICES</span></div>
                        <div className="price-wr">
                            <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" />
                            <div className="info-wr">
                                <a href="/" className="primary-btn">Core</a>
                                <p>Genuine giraffe  </p>
                                <p className="type">Ξ 16.6 $57,453.32</p>
                            </div>
                        </div>
                        <div className="price-wr">
                            <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" />
                            <div className="info-wr">
                                <a href="/" className="primary-btn">Core</a>
                                <p>Genuine giraffe  </p>
                                <p className="type">Ξ 16.6 $57,453.32</p>
                            </div>
                        </div>
                        <div className="price-wr">
                            <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" />
                            <div className="info-wr">
                                <a href="/" className="primary-btn">Core</a>
                                <p>Genuine giraffe  </p>
                                <p className="type">Ξ 16.6 $57,453.32</p>
                            </div>
                        </div>
                        <div className="price-wr">
                            <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" />
                            <div className="info-wr">
                                <a href="/" className="primary-btn">Core</a>
                                <p>Genuine giraffe  </p>
                                <p className="type">Ξ 16.6 $57,453.32</p>
                            </div>
                        </div>
                        <div className="price-wr">
                            <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" />
                            <div className="info-wr">
                                <a href="/" className="primary-btn">Core</a>
                                <p>Genuine giraffe  </p>
                                <p className="type">Ξ 16.6 $57,453.32</p>
                            </div>
                        </div>
                        <div className="price-wr">
                            <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" />
                            <div className="info-wr">
                                <a href="/" className="primary-btn">Core</a>
                                <p>Genuine giraffe  </p>
                                <p className="type">Ξ 16.6 $57,453.32</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <marquee className="bg_prim">fantenuz - collect nft - sell your nft - artists - artwork - fantenuz - collect nft - sell your nft - artists - artwork - fantenuz - collect nft - sell your nft</marquee>
            <section className="product-wrapper token-wrapper">
                <div className="container">
                    <h1>current floor prices</h1>
                    <div className="products">
                        <div className="product">
                            <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" className="auth topmove" />

                                <h3>Wise Wasp</h3>
                                <p className="type">Rare</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/ostap-senyuk-axPGkHV6M2Q-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/ostap-senyuk-axPGkHV6M2Q-unsplash.png" className="auth topmove" />

                                    <h3>Witty Weasel</h3>
                                    <p className="type">Rare</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/gradienta-ku4fXpHdVZQ-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />

                                    <h3>Woke Walrus</h3>
                                    <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/wrongtog-ti0UfqeGcnw-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />

                                    <h3>Zealous Zombie</h3>
                                    <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/efe-kurnaz-RnCPiXixooY-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />

                                    <h3>Zealous Zombie</h3>
                                    <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/solen-feyissa-CN03cmWuPsY-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />

                                    <h3>Zealous Zombie</h3>
                                    <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/oppo-iWE2gH9n8oU-unsplash (1).png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />

                                    <h3>Product</h3>
                                    <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/carl-raw-m3hn2Kn5Bns-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />

                                    <h3>Product</h3>
                                    <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/tony-reid-PGdMhonLLZk-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />

                                    <h3>Product</h3>
                                    <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/mindspace-studio-0njerYsSZ1k-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />

                                    <h3>Product</h3>
                                    <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/tandem-x-visuals-B9_QyKJGsT8-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />

                                    <h3>Product</h3>
                                    <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/carl-raw-m3hn2Kn5Bns-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />

                                    <h3>Product</h3>
                                    <p className="type">Core</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="recenet-activity">
                <div className="container">
                    <div className="heading">
                        <h2>recent activity</h2>
                        <p>COLLECT YOUR TOKEN</p>
                    </div>
                    <div className="owl-theme">
                        <div className="owl-controls">
                            <div className="custom-nav owl-nav"></div>
                        </div>
                    </div>
                </div>
                <OwlCarousel className="recent-slider products owl-carousel">
                    <div className="product recents">
                        <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" />
                        <div className="product-info">
                            <span className="sku topmove">#09865</span>
                            <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" className="auth topmove" />
                            <p className="cat">INVERTEBRATE</p>
                            <h3>Wise Wasp</h3>
                            <p className="type">Rare</p>
                        </div>
                    </div>
                    <div className="product recents">
                        <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" />
                        <div className="product-info">
                            <span className="sku topmove">#09865</span>
                            <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" className="auth topmove" />
                            <p className="cat">INVERTEBRATE</p>
                            <h3>Wise Wasp</h3>
                            <p className="type">Rare</p>
                        </div>
                    </div>
                    <div className="product recents">
                        <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" />
                        <div className="product-info">
                            <span className="sku topmove">#09865</span>
                            <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" className="auth topmove" />
                            <p className="cat">INVERTEBRATE</p>
                            <h3>Wise Wasp</h3>
                            <p className="type">Rare</p>
                        </div>
                    </div>
                    <div className="product recents">
                        <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" />
                        <div className="product-info">
                            <span className="sku topmove">#09865</span>
                            <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" className="auth topmove" />
                            <p className="cat">INVERTEBRATE</p>
                            <h3>Wise Wasp</h3>
                            <p className="type">Rare</p>
                        </div>
                    </div>
                    <div className="product recents">
                        <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" />
                        <div className="product-info">
                            <span className="sku topmove">#09865</span>
                            <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" className="auth topmove" />
                            <p className="cat">INVERTEBRATE</p>
                            <h3>Wise Wasp</h3>
                            <p className="type">Rare</p>
                        </div>
                    </div>
                </OwlCarousel>
            </section>

            <section className="token-wrapper timeline">
                <div className="container">
                    <h1>fantunez timeline</h1>
                    <img src="assets/images/Group 167.svg" />
                    <a href="/" className="primary-btn">SHOW MORE</a>
                </div>
            </section>

            <marquee className="bg_prim">fantenuz - collect nft - sell your nft - artists - artwork - fantenuz - collect nft - sell your nft - artists - artwork - fantenuz - collect nft - sell your nft</marquee>

        </>

    )
}

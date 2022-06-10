import React from 'react'

export default function CollectionPage() {
    return (
        <>

            <section className="section-head">
                <div className="container">
                    <img src="assets/images/GRAY'S COLLECTION.png" />
                    {/* <!-- <div className="banner">
			<div className="info-wr">
				<p className="sup_text">Gary's Collection</p>
				<h1>Gary's Originally Owned</h1>
				<img src="images/loose-gummy.png" alt="" />
			</div>  
			<div className="image-wr">
				<img src="images/loose-gummy.png" alt="" />
			</div>
		</div> --> */}
                </div>
            </section>

            <section className="product-wrapper">
                <div className="container">
                    <div className="collection-head">
                        <div className="product-count">Showing 12 of 100 products</div>
                        <div className="filter">
                            <select className="primary-btn">
                                <option>SORT - ALL</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="products">
                        <div className="product">
                            <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/zak-7wBFsHWQDlk-unsplash.png" className="auth topmove" />
                                <p className="cat">INVERTEBRATE</p>
                                <h3>Wise Wasp</h3>
                                <p className="type">Rare</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/ostap-senyuk-axPGkHV6M2Q-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/ostap-senyuk-axPGkHV6M2Q-unsplash.png" className="auth topmove" />
                                <p className="cat">Mammal</p>
                                <h3>Witty Weasel</h3>
                                <p className="type">Rare</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/gradienta-ku4fXpHdVZQ-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />
                                <p className="cat">Mammal</p>
                                <h3>Woke Walrus</h3>
                                <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/wrongtog-ti0UfqeGcnw-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />
                                <p className="cat">Mammal</p>
                                <h3>Zealous Zombie</h3>
                                <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/efe-kurnaz-RnCPiXixooY-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />
                                <p className="cat">Mammal</p>
                                <h3>Zealous Zombie</h3>
                                <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/solen-feyissa-CN03cmWuPsY-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />
                                <p className="cat">Mammal</p>
                                <h3>Zealous Zombie</h3>
                                <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/oppo-iWE2gH9n8oU-unsplash (1).png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />
                                <p className="cat">Mammal</p>
                                <h3>Product</h3>
                                <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/carl-raw-m3hn2Kn5Bns-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />
                                <p className="cat">Mammal</p>
                                <h3>Product</h3>
                                <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/tony-reid-PGdMhonLLZk-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />
                                <p className="cat">Mammal</p>
                                <h3>Product</h3>
                                <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/mindspace-studio-0njerYsSZ1k-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />
                                <p className="cat">Mammal</p>
                                <h3>Product</h3>
                                <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/tandem-x-visuals-B9_QyKJGsT8-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />
                                <p className="cat">Mammal</p>
                                <h3>Product</h3>
                                <p className="type">Core</p>
                            </div>
                        </div>
                        <div className="product">
                            <img src="assets/images/carl-raw-m3hn2Kn5Bns-unsplash.png" />
                            <div className="product-info">
                                <span className="sku topmove">#09865</span>
                                <img src="assets/images/kim-stenny-andersen-dk6J9IELSaU-unsplash.png" className="auth topmove" />
                                <p className="cat">Mammal</p>
                                <h3>Product</h3>
                                <p className="type">Core</p>
                            </div>
                        </div>
                    </div>
                    <div className="pagination">
                        <a href="#" className="btn prev">&lt;</a>
                        <a href="#" className="active">1</a>
                        <a href="#" >2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#" className="btn next">&gt;</a>
                    </div>
                </div>
            </section>
        </>
    )
}

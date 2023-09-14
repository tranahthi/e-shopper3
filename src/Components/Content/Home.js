import Sidebar from "../Layout/Sidebar";

function Home() {

    return (

        <div className="App">
            <section id="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#slider-carousel" data-slide-to={0} className="active" />
                                    <li data-target="#slider-carousel" data-slide-to={1} />
                                    <li data-target="#slider-carousel" data-slide-to={2} />
                                </ol>
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <div className="col-sm-6">
                                            <h1><span>E</span>-SHOPPER</h1>
                                            <h2>Free E-Commerce Template</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            <button type="button" className="btn btn-default get">Get it now</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="images/home/girl1.jpg" className="girl img-responsive" alt="" />
                                            <img src="images/home/pricing.png" className="pricing" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-sm-6">
                                            <h1><span>E</span>-SHOPPER</h1>
                                            <h2>100% Responsive Design</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            <button type="button" className="btn btn-default get">Get it now</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="images/home/girl2.jpg" className="girl img-responsive" alt="" />
                                            <img src="images/home/pricing.png" className="pricing" alt="" />
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="col-sm-6">
                                            <h1><span>E</span>-SHOPPER</h1>
                                            <h2>Free Ecommerce Template</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                            <button type="button" className="btn btn-default get">Get it now</button>
                                        </div>
                                        <div className="col-sm-6">
                                            <img src="images/home/girl3.jpg" className="girl img-responsive" alt="" />
                                            <img src="images/home/pricing.png" className="pricing" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                                    <i className="fa fa-angle-left" />
                                </a>
                                <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                                    <i className="fa fa-angle-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <Sidebar/>
                        </div>
                        <div className="col-sm-9 padding-right">
                            <div className="features_items">{/*features_items*/}
                                <h2 className="title text-center">Features Items</h2>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center" id="product1">
                                                <img src="images/shop/product12.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center" id="product2">
                                                <img src="images/shop/product11.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center" id="product3">
                                                <img src="images/shop/product10.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center" id="product4">
                                                <img src="images/shop/product9.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                            </div>
                                            <img src="images/home/new.png" className="new" alt="" />
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center" id="product5">
                                                <img src="images/shop/product8.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                            </div>
                                            <img src="images/home/sale.png" className="new" alt="" />
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center" id="product6">
                                                <img src="images/shop/product7.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/home/product6.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/home/product5.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/home/product4.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/home/product3.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/home/product2.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src="images/home/product1.jpg" alt="" />
                                                <h2>$56</h2>
                                                <p>Easy Polo Black Edition</p>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                            <div className="product-overlay">
                                                <div className="overlay-content">
                                                    <h2>$56</h2>
                                                    <p>Easy Polo Black Edition</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="choose">
                                            <ul className="nav nav-pills nav-justified">
                                                <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                                <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <ul className="pagination">
                                    <li className="active"><a href>1</a></li>
                                    <li><a href>2</a></li>
                                    <li><a href>3</a></li>
                                    <li><a href>»</a></li>
                                </ul>
                            </div>{/*features_items*/}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home
import { useEffect, useState } from "react";
import Sidebar from "../Layout/Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {


    const [getProduct, setProduct] = useState([])
    console.log(getProduct)
   

    useEffect(() => {
        axios.get("http://localhost/laravel8/laravel8/public/api/product")
            .then(res => {
                console.log(res)
                setProduct(res.data.data)
            })
            .catch(error => console.log(error))
    }, [])
    

    function renderProductHome() {
        if (Array.isArray(getProduct) && getProduct.length > 0) {
            return getProduct.map((product, index) => {
                const images = JSON.parse(product.image);
                const firstImage = images[0]
                console.log(images)
              
                return (
                    <div className="col-sm-4" key={index}>
                        <div className="product-image-wrapper">
                            <div className="single-products">
                                <div className="productinfo text-center" id="product1">
                                    <img src={`http://localhost/laravel8/laravel8/public/upload/product/${product.id_user}/${firstImage}`}
                                        alt={""} />
                                    <h2>{product.price}</h2>
                                    <p>{product.name}</p>
                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                </div>
                                <div className="product-overlay">
                                    <div className="overlay-content">
                                        <h2>{product.price}</h2>
                                        <p>{product.name}</p>
                                        <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                    </div>
                                </div>
                            </div>
                            <div className="choose">
                                <ul className="nav nav-pills nav-justified">
                                    <li><a href><i className="fa fa-plus-square" />Add to wishlist</a></li>
                                    <li><a href><i className="fa fa-plus-square" />Add to compare</a></li>
                                    <li><Link to={`/detail-product/${product.id}`}><i className="fa fa-plus-square" />Read more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )

            })
        }

    }

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
                        <div className="col-sm-9 padding-right">
                            <div className="features_items">{/*features_items*/}
                                <h2 className="title text-center">Features Items</h2>
                                <div className="col-4">
                                    {renderProductHome()}
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
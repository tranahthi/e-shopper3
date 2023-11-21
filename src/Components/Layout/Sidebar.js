import axios from "axios";

import { useEffect, useState } from "react";


function Sidebar() {





    const [getCategory, setCategory] = useState([])
    const [getBrand, setBrand] = useState([])


    console.log(getBrand)
    console.log(getCategory)


    useEffect(() => {
        axios.get("http://localhost/laravel8/laravel8/public/api/category-brand")
            .then(res => {
                console.log(res)

                setCategory(res.data.category)
                setBrand(res.data.brand)

            })
            .catch(error => console.log(error))
    }, [])


    function renderCategory() {
        if (Array.isArray(getCategory) && getCategory.length > 0) {
            return getCategory.map((category, index) => (
                <div className="panel panel-default" key={index}>
                    <div className="panel-heading">
                        <h4 className="panel-title"><a href="#">{category.category}</a></h4>
                    </div>
                </div>

            ))
        }
    }
    function renderBrand() {
        if (Array.isArray(getBrand) && getBrand.length > 0) {
            return getBrand.map((brand, index) => (
                <ul className="nav nav-pills nav-stacked" key={index}>
                    <li><a href> <span className="pull-right"></span>{brand.brand}</a></li>

                </ul>
            ))
        }
    }
    return (
        <div className="left-sidebar">
            <h2>Category</h2>
            <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
                {renderCategory()}
            </div>

            <div className="brands_products">{/*brands_products*/}
                <h2>Brands</h2>
                <div className="brands-name">
                    {renderBrand()}
                </div>
            </div>{/*/brands_products*/}
            <div className="price-range">{/*price-range*/}
                <h2>Price Range</h2>
                <div className="well">
                    <input type="text" className="span2" defaultValue data-slider-min={0} data-slider-max={600} data-slider-step={5} data-slider-value="[250,450]" id="sl2" /><br />
                    <b>$ 0</b> <b className="pull-right">$ 600</b>
                </div>
            </div>{/*/price-range*/}
            <div className="shipping text-center">{/*shipping*/}
                <img src="images/home/shipping.jpg" alt="" />
            </div>{/*/shipping*/}
        </div>
    );
}
export default Sidebar
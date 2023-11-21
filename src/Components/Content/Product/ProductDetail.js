import axios from "axios"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ProductDetail() {


    const [brands, setBrands] = useState([]);
    const [brandName, setBrandName] = useState("");
    const [getProductDetail, setProductDetail] = useState({})
    const [images, setImages] = useState([])
    //lưu hình ảnh ban đầu khi bấm vào read more
    const [currentImage, setCurrentImage] = useState("");

    const [cart , setCart] = useState({})
    const [quantity , setQuantity] = useState(1)
    let { id } = useParams()
    console.log(images)
    console.log(brandName)
    console.log(brands)
    console.log(getProductDetail)
    useEffect(() => {

        axios.get("http://localhost/laravel8/laravel8/public/api/category-brand")
            .then(res => {
                console.log(res)
                setBrands(res.data.brand)
            })
            .catch(error => console.log(error))

        axios.get(`http://localhost/laravel8/laravel8/public/api/product/detail/${id}`)
            .then(res => {
                console.log(res)
                const productDetail = res.data.data
                setProductDetail(productDetail)

                const images = JSON.parse(res.data.data.image)
                setImages(images)
                setCurrentImage(images[0])

                const brand = brands.find((brand) => brand.id === productDetail.id_brand);
                console.log(brand)
                if (brand) {
                    setBrandName(brand.brand);
                    console.log(brand.brand)
                } else {
                    console.log("loxi")
                }



            })
            .catch(error => console.log(error))
    }, [id])

    // hàm xử lý thay đổi ảnh khii click 
    const handleImageClick = (image) => {
        setCurrentImage(image);
    };

    function handleQuantity(e){
        const newQuantity = parseInt(e.target.value , 10)
        setQuantity(newQuantity)
        
    }

    function addToCart() {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || {};
        // Tạo một bản sao của giỏ hàng hiện tại
        const updatedCart = { ...existingCart };
        // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng thì cộng số lượng lên
        if (updatedCart[getProductDetail.id]) {
          updatedCart[getProductDetail.id] += quantity;
        } else {
          // Nếu sản phẩm chưa tồn tại, thêm nó vào giỏ hàng
          updatedCart[getProductDetail.id] = quantity;
        }
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
      



    function renderProductDetail() {
        if (getProductDetail != "") {
            return (
                <div className="product-details">
                    <div className="col-sm-5">
                        <div className="view-product">
                            <img src={`http://localhost/laravel8/laravel8/public/upload/product/${getProductDetail.id_user}/${currentImage}`} alt="" />
                            <a href={`http://localhost/laravel8/laravel8/public/upload/product/${getProductDetail.id_user}/${currentImage}`} rel="prettyPhoto">
                                <h3>ZOOM</h3>
                            </a>
                        </div>
                        <div id="similar-product" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="item active">
                                    {images.map((image, index) => (
                                        <a key={index} href="#" onClick={() => handleImageClick(image)}>
                                            <img src={`http://localhost/laravel8/laravel8/public/upload/product/${getProductDetail.id_user}/${image}`} alt="" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <a
                                className="left item-control"
                                href="#similar-product"
                                data-slide="prev"
                            >
                                <i className="fa fa-angle-left" />
                            </a>
                            <a
                                className="right item-control"
                                href="#similar-product"
                                data-slide="next"
                            >
                                <i className="fa fa-angle-right" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="product-information">
                            {/*/product-information*/}
                            <img src="images/product-details/new.jpg" className="newarrival" alt="" />
                            <h2>{getProductDetail.name}</h2>
                            <p>Web ID: </p>
                            <img src="images/product-details/rating.png" alt="" />
                            <span>
                                <span>{getProductDetail.price}</span>
                                <label>Quantity:</label>
                                <input type="number" name="quantity" value={quantity} onChange={handleQuantity} />
                                <button type="button" className="btn btn-fefault cart" onClick={addToCart}>
                                    <i className="fa fa-shopping-cart" />
                                    Add to cart
                                </button>
                            </span>
                            <p>
                                <b>Availability:</b> In Stock
                            </p>
                            <p>
                                <b>Condition:</b> New
                            </p>
                            <p>
                                <b>Brand:</b> {brandName}
                            </p>
                            <a href="">
                                <img
                                    src="images/product-details/share.png"
                                    className="share img-responsive"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (

        <div>
            {renderProductDetail()}
        </div>
    )

}
export default ProductDetail
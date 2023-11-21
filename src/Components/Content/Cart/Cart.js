import axios from "axios"
import { useEffect, useState } from "react"


function Cart() {


    // const [cart, setCart] = useState({})
    const [purchasedProduct, setPurchasedProduct] = useState([])
    const [images, setImages] = useState([])
    // console.log(image)




    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart"))
        // setCart(cartData)
        console.log(cartData)
        if (cartData) {
            axios.post("http://localhost/laravel8/laravel8/public/api/product/cart", cartData)
                .then(res => {
                    console.log(res)
                    setPurchasedProduct(res.data.data)
                    console.log(res.data.data.image)

                    const images = JSON.parse(res.data.data.image)
                    setImages(images)
                    console.log(images)

                })
                .catch(error => console.log(error))
        }
    }, [])

    function handleUp(index, event) {
        event.preventDefault();
        //tạo bản sao để tránh thay đổi trực tiếp trên state
        const updatedProduct = [...purchasedProduct];

        if (updatedProduct[index]) {

            updatedProduct[index].qty += 1;

            setPurchasedProduct(updatedProduct);

            const updatedCartLocal = JSON.parse(localStorage.getItem("cart"));

            if (updatedCartLocal && updatedCartLocal[updatedProduct[index].id]) {

                updatedCartLocal[updatedProduct[index].id] = updatedProduct[index].qty;

                localStorage.setItem("cart", JSON.stringify(updatedCartLocal));
            }
        }
    }

    function handleDown(index, event) {
        event.preventDefault();
        const updatedProduct = [...purchasedProduct];
        if (updatedProduct[index]) {
            updatedProduct[index].qty -= 1;
            setPurchasedProduct(updatedProduct);

            const updatedCartLocal = JSON.parse(localStorage.getItem("cart"));

            if (updatedCartLocal && updatedCartLocal[updatedProduct[index].id]) {

                updatedCartLocal[updatedProduct[index].id] = updatedProduct[index].qty;

                localStorage.setItem("cart", JSON.stringify(updatedCartLocal));
            }
        }

    }
    function handleDetele(productId,e) {
        e.preventDefault();
        const updateProduct = purchasedProduct.filter((product) => product.id !== productId)
        setPurchasedProduct(updateProduct)

        const updatedCartLocal = JSON.parse(localStorage.getItem("cart"));
        if (updatedCartLocal && updatedCartLocal[productId]) {
            delete updatedCartLocal[productId];
            localStorage.setItem("cart", JSON.stringify(updatedCartLocal));
        }


    }



    function renderTotalCart() {
        return (
            <section id="do_action">
                <div className="container">
                    <div className="col-sm-6">
                        <div className="total_area">
                            <ul>
                                <li>
                                    Cart Sub Total <span>$59</span>
                                </li>
                                <li>
                                    Eco Tax <span>$2</span>
                                </li>
                                <li>
                                    Shipping Cost <span>Free</span>
                                </li>
                                <li>
                                    Total <span>$61</span>
                                </li>
                            </ul>
                            <a className="btn btn-default update" href="">
                                Update
                            </a>
                            <a className="btn btn-default check_out" href="">
                                Check Out
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    function renderTableProduct() {
        if (Array.isArray(purchasedProduct) && purchasedProduct.length > 0) {
            return purchasedProduct.map((value, index) => (
                <tbody key={index}>
                    <tr>
                        <td className="cart_product">
                            {images.map((image, index) => (
                                <a href="" key={index}>
                                    <img src={`http://localhost/laravel8/laravel8/public/upload/product/${value.id_user}/${image[0]}`} alt="" />
                                </a>
                            ))}
                        </td>
                        <td className="cart_description">
                            <h4>
                                <a href="">{value.detail}</a>
                            </h4>
                            <p>Web ID: 1089772</p>
                        </td>
                        <td className="cart_price">
                            <p>{value.price}</p>
                        </td>
                        <td className="cart_quantity">
                            <div className="cart_quantity_button">

                                <a className="cart_quantity_down" href="" onClick={(e) => handleDown(index, e)}>
                                    {" "}
                                    -{" "}
                                </a>
                                <input
                                    className="cart_quantity_input"
                                    type="text"
                                    name="quantity"
                                    value={value.qty}
                                    autoComplete="off"
                                    size={2}
                                />
                                <a className="cart_quantity_up" href="" onClick={(e) => handleUp(index, e)}>
                                    {" "}
                                    +{" "}
                                </a>

                            </div>
                        </td>
                        <td className="cart_total">
                            <p className="cart_total_price">{value.price * value.qty}</p>
                        </td>
                        <td className="cart_delete">
                            <a className="cart_quantity_delete" href="" onClick={(e) => handleDetele(value.id,e)}>
                                <i className="fa fa-times" />
                            </a>
                        </td>
                    </tr>
                </tbody>
            ))
        }
    }



    return (
        <>
            <section id="cart_items">
                <div className="container" style={{ width: "100%" }}>
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li className="active">Shopping Cart</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Item</td>
                                    <td className="description" />
                                    <td className="price">Price</td>
                                    <td className="quantity">Quantity</td>
                                    <td className="total">Total</td>
                                    <td />
                                </tr>
                            </thead>
                            {renderTableProduct()}

                        </table>
                    </div>

                </div>
            </section>
            {renderTotalCart()}
        </>

    )

}
export default Cart
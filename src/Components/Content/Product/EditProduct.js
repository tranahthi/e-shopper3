// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// function EditProduct() {
//     const { productId } = useParams();
//     let token = localStorage.getItem("token");
//     const [product, setProduct] = useState({
//         name: "",
//         price: "",
//         category: "",
//         brand: "",
//         company: "",
//         detail: "",
//         status: ""
//     });
//     const [productList, setProductList] = useState([]);
//     console.log(productId)
//     useEffect(() => {
//         axios.get(`http://localhost/laravel8/laravel8/public/api/user/my-product`, {
//             headers: {
//                 'Authorization': 'Bearer ' + token,
//             }
//         })
//         .then(res => {
//             const productListData = res.data.data;
//             console.log("Product List Data:", productListData);
           
           
//             // Assuming productId is a string representing the product ID
//             const selectedProduct = productListData[productId];
//             console.log("Selected Product:", selectedProduct);
    
//             if (selectedProduct) {
//                 setProduct({
//                     name: selectedProduct.name,
//                     price: selectedProduct.price,
//                     category: selectedProduct.category,
//                     brand: selectedProduct.brand,
//                     company: selectedProduct.company,
//                     detail: selectedProduct.detail,
//                     status: selectedProduct.status
//                 });
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
//     }, [productId, token]);
    
    


//     function handleInput(e) {
//         const { name, value } = e.target;
//         setProduct(state => ({ ...state, [name]: value }));
//     }

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm-9">
//                     <div className="signup-form">
//                         <h2 className="text-center">Edit product</h2>
//                         <form>
//                             <input type="text" placeholder="Name" name="name" value={product.name} onChange={handleInput} />
//                             <input type="number" placeholder="Price" name="price" value={product.price} onChange={handleInput} />
//                             <select name="category" value={product.category} onChange={handleInput}>
//                                 <option>Please choose category</option>
//                             </select>
//                             <select name="brand" value={product.brand} onChange={handleInput}>
//                                 <option>Please choose brand</option>
//                             </select>
//                             <select name="status" value={product.status} onChange={handleInput}>
//                                 <option>Please choose status</option>
//                             </select>
//                             <input type="text" placeholder="Company profile" name="company" value={product.company} onChange={handleInput} />
//                             <input type="file" multiple />
//                             <textarea type="text" placeholder="Detail" name="detail" value={product.detail} onChange={handleInput} />
//                             <button type="submit" className="btn btn-default">
//                                 Edit product
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default EditProduct;

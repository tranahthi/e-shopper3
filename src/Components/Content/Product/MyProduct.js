import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";


function MyProduct() {


  const [products, setProducts] = useState([]);
  const [image, setImage] = useState([])
  let token = localStorage.getItem("token");
  let userData = localStorage.getItem("userData")
  if (userData) {
    userData = JSON.parse(userData)
  }

  useEffect(() => {
    axios.get("http://localhost/laravel8/laravel8/public/api/user/my-product", {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
      .then(res => {
        console.log(res);
        const productData = res.data.data;
        const productList = Object.values(productData); // Chuyển đối tượng thành mảng
        localStorage.setItem("product" ,JSON.stringify(productData))
        // Trích xuất chuỗi JSON từ thông tin ảnh và chuyển thành mảng
        const imageArray = productList.map((product) => {
          const imageJson = product.image;
          const images = JSON.parse(imageJson);
          return images; // Chuyển mảng ảnh vào state
        });

        setProducts(productList);
        setImage(imageArray); // Lưu mảng ảnh vào state
      })
      .catch(error => console.log(error));
  }, []);


  function DeleteProduct(productId) {
    axios.get(`http://localhost/laravel8/laravel8/public/api/user/product/delete/${productId}`, {
      headers: {
        'Authorization': 'Bearer ' + token,
      }
    })
    .then(res => {
      console.log(res)
      // Nếu sản phẩm đã bị xóa thành công, cập nhật lại danh sách sản phẩm
      // const updatedProducts = products.filter(product => product.id !== productId);
      setProducts(res.data.data);
    })
    .catch(error => console.log(error))
  
  }
  return (
    <div>
      <h2>Member's Product</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (

            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <div>
                  <img style={{ width: "50px" }}
                    src={`http://localhost/laravel8/laravel8/public/upload/product/${userData.id}/${image[index][0]}`}
                    alt={""}
                  />
                </div>
              </td>
              <td>{product.price}</td>
              <td>
                <button><Link to={`/account/product/edit/${product.id}`}>View</Link></button>
                <button onClick={() => DeleteProduct(product.id)}>Delete</button>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}

export default MyProduct;

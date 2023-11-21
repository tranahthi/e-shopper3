

const [errors, setErrors] = useState({});
const [categoryList, setCategoryList] = useState([]);
const [brandList, setBrandList] = useState([]);
const [selectedFiles, setSelectedFiles] = useState([]);
const [productData, setProductData] = useState({
  name: "",
  price: "",
  category: "",
  brand: "",
  company: "",
  detail: "",
  status: "1", // Default to 'new'
  sale: "",
});


useEffect(() => {
  axios
    .get("http://localhost/laravel8/laravel8/public/api/category-brand")
    .then((res) => {
      setCategoryList(res.data.category);
      setBrandList(res.data.brand);
    })
    .catch((error) => console.log(error));
}, []);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setProductData({ ...productData, [name]: value });
};

const handleFileChange = (e) => {
  const files = e.target.files;
  const allowedFormats = ["image/jpeg", "image/png", "image/jpg", "image/gif"];
  const maxSize = 1024; // Maximum file size in KB (1MB)

  const selectedFiles = Array.from(files);

  const validFiles = selectedFiles.filter((file) => {
    if (allowedFormats.includes(file.type) && file.size <= maxSize * 1024) {
      return true;
    } else {
      alert(`File ${file.name} is not a valid image format or exceeds the 1MB limit and will not be uploaded.`);
      return false;
    }
  });

  setSelectedFiles(validFiles);
};

const handleSubmit = (e) => {
  e.preventDefault();
  let errorSubmit = {};
  let flag = true;

  if (productData.name === "") {
    errorSubmit.name = "Please enter the product name.";
    flag = false;
  }
  if (productData.price === "") {
    errorSubmit.price = "Please enter the product price.";
    flag = false;
  }
  if (productData.category === "") {
    errorSubmit.category = "Please select a category.";
    flag = false;
  }
  if (productData.brand === "") {
    errorSubmit.brand = "Please select a brand.";
    flag = false;
  }
  if (productData.status === "") {
    errorSubmit.status = "Please select the status.";
    flag = false;
  }
  if (productData.company === "") {
    errorSubmit.company = "Please enter the company profile.";
    flag = false;
  }
  if (productData.detail === "") {
    errorSubmit.detail = "Please enter the product description.";
    flag = false;
  }

  if (productData.status === "0" && productData.sale === "") {
    errorSubmit.sale = "Please enter the sale price.";
    flag = false;
  }

  if (selectedFiles.length === 0) {
    errorSubmit.image = "Please upload at least one image.";
    flag = false;
  }

  if (!flag) {
    setErrors(errorSubmit);
  } else {
    setErrors({});
    addProduct();
  }
};

const addProduct = () => {
  const formData = new FormData();
  formData.append("name", productData.name);
  formData.append("price", productData.price);
  formData.append("id_category", productData.category);
  formData.append("id_brand", productData.brand);
  formData.append("company_profile", productData.company);
  formData.append("detail", productData.detail);
  formData.append("status", productData.status);
  formData.append("sale", productData.sale);
  
  for (let i = 0; i < selectedFiles.length; i++) {
    formData.append("file[]", selectedFiles[i]);
  }

  axios
    .post("http://localhost/laravel8/laravel8/public/api/user/product/add", formData, {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token"),
      },
    })
    .then((res) => {
      if (res.status === 200) {
        alert("Product added successfully");
      } else {
        alert("Request error");
      }
    })
    .catch((error) => console.log(error));
};

return (
  <div className="container">
    <div className="row">
      <div className="col-sm-9">
        <div className="signup-form">
          <h2>Create product!</h2>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <FormErros errors={errors}/>
            <div className="form-group">
              <input type="text" placeholder="Name" name="name" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Price" name="price" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <select name="category" onChange={handleInputChange}>
                <option value="">Please choose category</option>
                {categoryList.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              
            </div>
            <div className="form-group">
              <select name="brand" onChange={handleInputChange}>
                <option value="">Please choose brand</option>
                {brandList.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
              
            </div>
            <div className="form-group">
              <select name="status" onChange={handleInputChange}>
                <option value="1">New</option>
                <option value="0">Sale</option>
              </select>
            </div>
            {productData.status === "0" && (
              <div className="form-group">
                <input type="text" name="sale" value={productData.sale} onChange={handleInputChange} />
              </div>
            )}
            <div className="form-group">
              <input type="text" placeholder="Company" name="company" onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <input type="file" name="file" multiple onChange={handleFileChange} />
            
            </div>
            <div className="form-group">
              <textarea type="text" placeholder="Detail" name="detail" onChange={handleInputChange} />
            </div>
            <button type="submit" className="btn btn-default">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

 // if (file.length > 0) {
        //     const allowedExtensions = ['jpg', 'jpeg', 'png'];
        //     const maxSize = 1024 * 1024;
        //     for (let i = 0; i < file.length; i++) {
        //         const files = file[i];
        //         const fileName = files.name;
        //         const fileExtension = fileName.split('.').pop().toLowerCase();

        //         if (!allowedExtensions.includes(fileExtension)) {
        //             errorSubmit.files = 'Vui lòng chọn đúng định dạng hình ảnh (JPEG hoặc PNG).';
        //             flag = false;
        //             break;
        //         } else if (files.size > maxSize) {
        //             errorSubmit.files = 'Kích thước tệp phải nhỏ hơn 1MB.';
        //             flag = false;
        //             break;
        //         }
        //     }
        // } else {

        //     errorSubmit.file = 'Vui lòng chọn ít nhất một tệp hình ảnh.';
        //     flag = false;
        // }



        import axios from "axios"
import { useEffect, useState } from "react"


function MyProduct() {

    const [product, setProduct] = useState()
    const [images, setImages] = useState([])
    let token = localStorage.getItem("token")

    console.log(product)
    console.log(images)
    useEffect(() => {
        axios.get("http://localhost/laravel8/laravel8/public/api/user/my-product",
            {
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            })
            .then(res => {
                console.log(res)
                setProduct(res.data.data)
                setImages(res.data.data.image)
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2>Member's Products</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                          <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {product.map((value,index) => ( */}
                    <tr >
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>

                        </td>
                        <td>
                            <button >Edit</button>
                        </td>
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                    {/* ))}  */}
                </tbody>
            </table>
        </div>
    )

}
export default MyProduct
import axios from "axios"
import { useEffect, useState } from "react"
import FormErros from "../../../FormErros";



function AddProduct() {


    const [errors, setErrors] = useState({});
    const [getCategory, setCategory] = useState([])
    const [getBrand, setBrand] = useState([])
    const [file, setFile] = useState([])
    const [getInput, setInput] = useState({
        name: "",
        price: "",
        category: "",
        brand: "",
        company: "",
        detail: "",
        status: 1,
        sale: "",


    })




    useEffect(() => {
        axios.get("http://localhost/laravel8/laravel8/public/api/category-brand")
            .then(res => {

                setCategory(res.data.category)
                setBrand(res.data.brand)
            })
            .catch(error => console.log(error))
    }, [])


    function hanldeInput(e) {
        const { name, value } = e.target
        setInput({ ...getInput, [name]: value })
    }

    function handleFileChange(e) {
        const selectedFiles = e.target.files;
        setFile(selectedFiles);
    }
    function hanldeSubmit(e) {
        e.preventDefault()
        let errorSubmit = {}
        let flag = true


        if (getInput.name === "") {
            errorSubmit.name = "vui lòng nhập trên sản phẩm"
            flag = false
        }
        if (getInput.price === "") {
            errorSubmit.price = "Vui lòng nhập giá của sản phẩm"
            flag = false
        }
        if (getInput.category === "") {
            errorSubmit.category = "vui lòng chọn category"
            flag = false
        }
        if (getInput.brand === "") {
            errorSubmit.brand = "vui lòng chọn brand"
            flag = false
        }
        if (getInput.status === "") {
            errorSubmit.status = "Vui lòng chọn status"
            flag = false
        }
        if (getInput.company === "") {
            errorSubmit.company = "Vui lòng điền company profile"
            flag = false
        }
        if (getInput.detail === "") {
            errorSubmit.detail = "Vui lòng điền mô tả sản phẩm"
            flag = false
        }

        if (file.length > 0) {
            const allowedExtensions = ['jpg', 'jpeg', 'png'];
            const maxSize = 1024 * 1024;
            for (let i = 0; i < file.length; i++) {
                const files = file[i];
                const fileName = files.name;
                const fileExtension = fileName.split('.').pop().toLowerCase();

                if (!allowedExtensions.includes(fileExtension)) {
                    errorSubmit.files = 'Vui lòng chọn đúng định dạng hình ảnh .';
                    flag = false;
                    break;
                } else if (files.size > maxSize) {
                    errorSubmit.files = 'Kích thước tệp phải nhỏ hơn 1MB.';
                    flag = false;
                    break;
                }
            }
        } else {
            errorSubmit.file = 'Vui lòng chọn ít nhất một tệp hình ảnh.';
            flag = false;
        }
        if (!flag) {
            setErrors(errorSubmit);
        } else {
            setErrors({});
            Add()

        }
    }
    function Add() {
        let token = localStorage.getItem("token")

        let formData = new FormData()
        formData.append('name', getInput.name)
        formData.append('price', getInput.price)
        formData.append('category', getInput.category)
        formData.append('brand', getInput.brand)
        formData.append('company', getInput.company)
        formData.append('detail', getInput.detail)
        formData.append('status', getInput.status)
        formData.append('sale', getInput.sale)
        // Thêm các tệp hình ảnh vào formData
        console.log(file)
        // file.map((item, i) => {
        //     formData.append('file[]', item);
        //   });
        //   for (let i = 0; i < file.length; i++) {
        //     formData.append("file[]", file[i]);
        //   }
        Object.keys(file).map((item, i) => {
            formData.append('file[]', file[item]);
        })


        axios.post("http://localhost/laravel8/laravel8/public/api/user/product/add", formData,
            {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            })
            .then(res => {
                console.log(res)
                if (res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    alert("add thanh cong")

                    console.log(res.data.data)
                    localStorage.setItem("product" ,JSON.stringify(res.data.data))
                    

                }
            })
            .catch(error => console.log(error))
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <div className="signup-form" >
                        {/* Sign up form */}
                        <h2>Create product!</h2>
                        <form encType="multipart/form-data" onSubmit={hanldeSubmit}>
                            <FormErros errors={errors} />
                            <input type="text" placeholder="Name" name="name" onChange={hanldeInput} />
                            <input type="number" placeholder="Price" name="price" onChange={hanldeInput} />
                            <select name="category" onChange={hanldeInput}>
                                <option value="">Please choose category</option>
                                {

                                    getCategory.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.category}
                                        </option>
                                    ))
                                }
                            </select>
                            <select name="brand" onChange={hanldeInput}>
                                <option value="">Please choose brand</option>
                                {
                                    getBrand.map((brand) => (
                                        <option key={brand.id} value={brand.id}>
                                            {brand.brand}
                                        </option>
                                    ))
                                }
                            </select>
                            <select name="status" onChange={hanldeInput}>

                                <option value="1">new</option>
                                <option value="0">sale</option>
                            </select>
                            {getInput.status === '0' && (
                                <div style={{ width: "200px", display: "flex" }}>
                                    <input type="text" name="sale" value={getInput.sale} onChange={hanldeInput} />%
                                </div>
                            )}
                            <input type="text" placeholder="Company profile" name="company" onChange={hanldeInput} />
                            <input type="file"  multiple onChange={handleFileChange} />
                            <textarea type="text" placeholder="Detail" name="detail" onChange={hanldeInput} />
                            <button type="submit" className="btn btn-default">
                                Add product
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default AddProduct
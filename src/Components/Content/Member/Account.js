import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import FormErros from "../../../FormErros"
import axios from "axios"


function Account() {
    // let { id } = useParams
    const [errors, setErrors] = useState({})
    const [userId, setUserId] = useState(null)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
       
    })
    let token = localStorage.getItem("token")

    useEffect(() => {
        let userData = localStorage.getItem("userData")
        if (userData) {
            userData = JSON.parse(userData)
            setUser({
                name: userData.name,
                email: userData.email,
                address: userData.address,
                phone: userData.phone,
                pass: userData.pass,
                // avatar:userData.avatar
            })
            setUserId(userData.id)

        }


    }, [])

   


    function handleInput(e) {
        const { name, value } = e.target
        setUser(state => ({ ...state, [name]: value }))
    }

    function handleUpdateSuccess(token, userData) {
        console.log(userData)

        localStorage.setItem("token", token); // lưuu token này vào local
        localStorage.setItem("userData", JSON.stringify(userData)) //lưu thông tin user vào local

    }
    function handleSubmit(e) {
        e.preventDefault()

        let errorSubmit = {}
        let flag = true
        if (user.name === "") {
            errorSubmit.name = "vui lòng nhập tên"
            flag = false
        }
        if (user.email === "") {
            errorSubmit.email = "vui lòng nhập email"
            flag = false
        }
        if (user.password === "") {
            errorSubmit.password = "vui lòng nhập pass"
            flag = false
        }
        if (user.phone === "") {
            errorSubmit.phone = "vui lòng nhập phone"
            flag = false
        }
        if (user.address === "") {
            errorSubmit.address = "vui lòng nhập address"
            flag = false
        }
      

        if (!flag) {
            setErrors(errorSubmit);
        } else {
            setErrors({});
            updateUser()
        }

        function updateUser() {
            const formData = new FormData();
            formData.append("name", user.name);
            formData.append("email", user.email);
            formData.append("password", user.password);
            formData.append("phone", user.phone);
            formData.append("address", user.address);
          



            axios.post(`http://localhost/laravel8/laravel8/public/api/user/update/${userId}`, formData,
                {
                    headers: {
                        'Authorization': `Bearer ` + token,
                        'Content-Type': 'multipart/form-data',
                    }
                })
                .then((res) => {
                    console.log(res)
                    if (res.status === 200) {
                        alert("Đã upadate thành công")
                        console.log(res.data.Auth)
                        handleUpdateSuccess(res.data.token, res.data.Auth)
                    } else {
                        alert("not ok")
                    }
                })
                .catch(error => console.log(error))
        }


    }



    return (
        <div className="blog-post-area">
            <div className="signup-form">
                <h2 className="title text-center">Update user</h2>
                <form onSubmit={handleSubmit}>
                    <FormErros errors={errors} />
                    <input type="text" placeholder="Name" name="name" value={user.name} onChange={handleInput} />
                    <input type="email" placeholder="Email Address" name="email" value={user.email} onChange={handleInput} readOnly />
                    <input type="password" placeholder="Password" name="pass" value={user.password} onChange={handleInput} />
                    <input type="tel" placeholder="Phone" name="phone" value={user.phone} onChange={handleInput} />
                    
                    <input type="text" placeholder="Address" name="address" value={user.address} onChange={handleInput} />
                    <button type="submit" className="btn btn-default">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );


}
export default Account
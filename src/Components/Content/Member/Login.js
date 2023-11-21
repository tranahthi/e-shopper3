import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import FormErros from "../../../FormErros"



function Login() {


    const [getInput, setInput] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    function handleInput(e) {
        const { name, value } = e.target
        setInput(state => ({ ...state, [name]: value }))
    }
    // Hàm này sẽ được gọi khi đăng nhập thành công
    function handleLoginSuccess(token,userData) {
        console.log(userData)
        
        localStorage.setItem("token", token); // lưuu token này vào local
        localStorage.setItem("userData" ,JSON.stringify(userData)) //lưu thông tin user vào local
        navigate("/"); // Điều hướng đến trang chủ sau khi đăng nhập
    }
    function handleSubmit(e) {
        e.preventDefault()
        let errorSubmit = {}
        let flag = true
        if (getInput.email === "") {
            errorSubmit.email = "Vui lòng nhập email"
            flag = false
        }
        if (getInput.password === "") {
            errorSubmit.password = "vui lòng nhập  password"
            flag = false
        }

        if (!flag) {
            setErrors(errorSubmit)
        } else {
            const data = {
                email: getInput.email,
                password: getInput.password,
                level: 0
            }

            axios.post("http://localhost/laravel8/laravel8/public/api/login", data)
                .then(res => {
                    console.log(res)
                    if (res.data.errors) {
                        setErrors(res.data.errors)
                    } else {
                        handleLoginSuccess(res.data.token,res.data.Auth)                   
                    }
                })
                .catch(error => console.log(error))
        }
    }
    


    return (
        <div className="contanier">
            <div className="row">
                <div className="col-sm-9 col-sm-offset-1">
                    <div className="login-form">
                        {/*login form*/}
                        <h2>Login to your account</h2>
                        <form onSubmit={handleSubmit}>
                            <FormErros errors={errors} />
                            <input type="email" placeholder="Email" name="email" onChange={handleInput} />
                            <input type="password" placeholder="Password" name="password" onChange={handleInput} />
                            <span>
                                <input type="checkbox" className="checkbox" />
                                Keep me signed in
                            </span>
                            <button type="submit" className="btn btn-default">
                                Login
                            </button>
                        </form>
                    </div>
                    {/*/login form*/}
                </div>


            </div>
        </div>

    )
}
export default Login
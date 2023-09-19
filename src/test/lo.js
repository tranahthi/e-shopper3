import { useState } from "react"
import FormError from "./FormError"


function LoginForm(){
    const [input , setInput] = useState({
        email:"",
        pass:""
    })
    const [ error , setError] = useState({})

    const handleInput = (e) =>{
        const nameInput = e.target.name
        const value = e.target.value
        setInput (state => ({...state,[nameInput]:value}))
    }

    function handleSubmit(e){
        e.preventDefault()
        // tạo ra 1 biến errorSubmit để lưu toàn bộ lỗi của input vào trong biến này
        let errorSubmit = {}
        // tạo biến flag,dựa vào đây để đưa toàn bộ lỗi tỏng biến errorSubmit để đưa lên setErrors
        let flag = true

        var getUser = localStorage.getItem("user")
        if(getUser){
            var userData= JSON.parse(getUser)
            console.log(userData)

            for( var i = 0; i < userData.length; i++){
                const user = userData[i]
                if(user.email != input.email){
                   errorSubmit.email = "email không chính xác"
                   flag = false
                }else if(user.email == input.email){
                    errorSubmit.email = ""
                    flag=true
                }
                if(user.pass != input.pass){
                    errorSubmit.pass = "pass không chính xác"
                    flag = false
                 }else if(user.email == input.email){
                     errorSubmit.pass = ""
                     flag=true
                 }

            }
        }
            
        if(input.email == ""){
            errorSubmit.email = "vui long nhap email"
            flag = false
        }
        if(input.pass == ""){
            errorSubmit.pass= " vui long nhap pass"
            flag = false
        }
        // if(getUser.email == input.email && ge)
        if(!flag){
            setError(errorSubmit)
        }else{
            alert("dang nhap thanh cong")
            
            setError({})
        }
        
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <FormError error={error}/> */}
                <input type="text" placeholder="email" name="email" onChange={handleInput}/><br></br>
                {error.email && <div className="error">{error.email}</div>} {/* Hiển thị lỗi dưới ô input */}
                <input type="text" placeholder="pass" name="pass" onChange={handleInput}/>
                {error.pass && <div className="error">{error.pass}</div>} {/* Hiển thị lỗi dưới ô input */}
                <button type="submit" className="btn btn-default">Login</button>
            </form>
           
        </div>
    )
}
export default LoginForm
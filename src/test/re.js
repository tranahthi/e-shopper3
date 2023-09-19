import { useState } from "react";
import FormError from "./FormError";


function Register() {

    const [getInput, setInput] = useState({
        email: "",
        pass: "",
        avatar: null,
        sex: ""
    })
    const [error, setError] = useState({})

    // function handleFile(e){
    //     const files = e.target.files
    //     // kiểm tra xem file cho đã được chọn hay chưa
    //     if(files.length > 0){
    //         const file = files[0]
    //         const infoFile = {
    //             name: file.name,
    //             type: file.type,
    //             size: file.size
    //         }
    //          console.log('File Info:', infoFile);

    //     // Now you can use fileInfo in your state or for validation
    //     const updateDataForm = { ...getInput };
    //     updateDataForm.avatar = file;
    //     setInput(updateDataForm);
    //     }

    // }
    function handleInput(e) {
        const { name, value, type, files } = e.target
        const updateDataForm = { ...getInput }
        if (type === 'file') {
            const file = files[0]
            if (file) {
                const maxSize = 1024 * 1024; // 1MB
                const allowedExtensions = ['png', 'jpg', 'jpeg' ];
    
                if (file.size > maxSize) {
                    setError({ ...error, [name]: " Kích thước file phải nhỏ hơn 1mb" });
                } else {
                    const infoFile = {
                        name: file.name,
                        type: file.type,
                        size: file.size
                    }
                    // const fileName = file.name;
                    // const fileType = file.type;
                    // const fileSize = file.size;
                    console.log(infoFile)
                    // console.log('Name:', fileName);
                    // console.log('Type:', fileType);
                    // console.log('Size:', fileSize, 'bytes');
                    // cắt chuỗi thàng 2 mảng con là tên và đuôi file sau đó dùng pop() để xóa phần tử cuối cùng của mảng và gán cho = fileExtention
                    const fileExtension = infoFile.name.split('.').pop().toLowerCase();
    
                    if (!allowedExtensions.includes(fileExtension)) {
                        setError({ ...error, [name]: "Hãy chọn đúng loại file là hình ảnh" });
                    } else {
                        setError({ ...error, [name]: '' });
                        updateDataForm[name] = file;
                    }
                }
            }
            // handleFile(e);
        } else {
            updateDataForm[name] = value;
        }
        
        if(name === "email"){
            if(!isValidEmail(updateDataForm.email)){
                setError({...error,[name]:"vui lòng nhập đúng định dạng email"})
            }else{
                setError({...error,[name]:""})
            }
        }

        setInput(updateDataForm)
       
    }
    function isValidEmail(email) {
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailCheck.test(email)
    }
    function handleSubmit(e) {
        e.preventDefault()
        let errorSubmit = {}
        let flag = true

        if (getInput.email === "") {
            errorSubmit.email = "Vui lòng nhập email";
            flag = false;
        }
        if (getInput.pass === "") {
            errorSubmit.pass = "Vui lòng nhập pass";
            flag = false;
        }
        if (getInput.avatar === null) {
            errorSubmit.avatar = "Vui lòng chọn file";
            flag = false;
        }
        if (getInput.sex === "") {
            errorSubmit.sex = "Vui lòng chọn giới tính";
            flag = false;
        }
       
        if (!flag) {
            setError(errorSubmit);
        } else {
            setError({});
            // Thực hiện lưu vào localStorage
            handleRegister();
        }
    }

    function handleRegister() {
        var getUser = localStorage.getItem("user")
        var users = getUser ? JSON.parse(getUser) : []
        // if (!Array.isArray(users)) {
        //     users = [];
        // }
        const newUser = {
            email: getInput.email,
            pass: getInput.pass,
            avatar: getInput.avatar,
            sex: getInput.sex
        };

        users.push(newUser)

        const userJson = JSON.stringify(users)
        localStorage.setItem("user", userJson)
    }

    const arr = [
        {
            "id": "",
            "name": "Vui Lòng chọn"
        },
        {
            "id": "1",
            "name": "Nam"
        },
        {
            "id": "2",
            "name": "Nữ"
        },
    ]

    return (
        <div>
            <form     onSubmit={handleSubmit} >
                {/* <FormError error ={error}/> */}
                <input style={{ margin: "20px" }} type="email" placeholder="Email" name="email" onChange={handleInput} /><br></br>
                {error.email && <div className="error">{error.email}</div>}
                {/* {error.email && <div className="error">{error.email}</div>} */}
                <input style={{ margin: "20px" }} type="password" placeholder="Password" name="pass" onChange={handleInput} /><br></br>
                {error.pass && <div className="error">{error.pass}</div>}
                <input style={{ margin: "20px" }} type="file" placeholder="Avatar" name="avatar" onChange={handleInput} /><br></br>
                {error.avatar && <div className="error">{error.avatar}</div>}
                <select style={{ margin: "20px" }} name="sex" onChange={handleInput}>
                    {
                        arr.map((index) => (
                            <option key={index.id} value={index.id}>
                                {index.name}
                            </option>
                        ))
                    }
                </select><br></br>
                {error.sex && <div className="error">{error.sex}</div>}
                <button style={{ margin: "20px" }} type="submit" >Register</button>
            </form>
        </div>
    );
}
export default Register
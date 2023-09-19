import axios from "axios";
import { useState } from "react";
import FormErros from "../../../FormErros";

function Register() {
    const [getInput, setInput] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        avatar: null,
        level: 0, 
    });

    const [errors, setErrors] = useState({});
    const [avatar, setAvatar] = useState(null);
    const [file, setFile] = useState(null);

    function handleUserInputFile(e) {
        const file = e.target.files[0];
        if (file) {
            // Kiểm tra kích thước file
            const size = 1024 * 1024; // 1MB
            if (file.size > size) {
                setErrors({ ...errors, avatar: "Kích thước file phải nhỏ hơn 1MB" });
                return;
            } else {
                const infoFile = {
                    name: file.name,
                    type: file.type,
                    size: file.size
                }
                console.log(infoFile)
                // Kiểm tra loại file
                const allowedExtensions = ["png", "jpg", "jpeg"];
                const fileExtension = infoFile.name.split('.').pop().toLowerCase();
                if (!allowedExtensions.includes(fileExtension)) {
                    setErrors({
                        ...errors,
                        avatar: "Hãy chọn đúng loại file là hình ảnh",
                    });
                    return;
                }
                // Nếu tất cả kiểm tra đều thành công, tiến hành mã hoá file và lưu vào state
                const reader = new FileReader();
                reader.onload = (e) => {
                    setAvatar(e.target.result);
                    setFile(file);
                    setErrors({ ...errors, avatar: '' }); // Xóa thông báo lỗi
                };
                reader.readAsDataURL(file);
            }


        }
    }

    function handleInput(e) {
        const { name, value, type } = e.target;
        const updateDataForm = { ...getInput };

        // Kiểm tra nếu đây là trường nhập file, thì không xử lý tại đây.
        if (type === "file") {
            return;
        }

        // Xử lý bình thường cho các trường khác
        updateDataForm[name] = value;
        if(name === "email"){
            if(!isValidEmail(updateDataForm.email)){
                setErrors({...errors,[name]:"vui lòng nhập đúng định dạng email"})
            }else{
                setErrors({...errors,[name]:""})
            }
        }

        setInput(updateDataForm);
    }
    function isValidEmail(email) {
        const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailCheck.test(email)
    }

    function handleSubmit(e) {
        e.preventDefault();
        let errorSubmit = {};
        let flag = true;

        if (getInput.name === "") {
            errorSubmit.name = "Vui lòng nhập tên";
            flag = false;
        }
        if (getInput.email === "") {
            errorSubmit.email = "Vui lòng nhập email";
            flag = false;
        }
        if (getInput. password === "") {
            errorSubmit. password = "Vui lòng nhập mật khẩu";
            flag = false;
        }
        if (getInput.phone === "") {
            errorSubmit.phone = "Vui lòng nhập số điện thoại";
            flag = false;
        }
        if (getInput.address === "") {
            errorSubmit.address = "Vui lòng nhập địa chỉ";
            flag = false;
        }
        // Kiểm tra hình ảnh (avatar)
        if (!file) {
            errorSubmit.avatar = "Vui lòng chọn hình ảnh";
            flag = false;
        }

        if (!flag) {
            setErrors(errorSubmit);
        } else {
            setErrors({});
            handleRegister();
        }
    }

    function handleRegister() {
        const formData = new FormData();
        formData.append("name", getInput.name);
        formData.append("email", getInput.email);
        formData.append("password", getInput. password);
        formData.append("phone", getInput.phone);
        formData.append("address", getInput.address);
        formData.append("avatar", avatar); // Đã là file đã được mã hoá
        formData.append("level", getInput.level);

        axios
            .post("http://localhost/laravel8/laravel8/public/api/register", formData)
            .then((res) => {
                console.log(res)
                if (res.status === 200) {
                    alert("Đăng ký thành công");
                } else {
                    alert("Lỗi request");
                }
            })
            .catch((error) => console.log(error));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <div className="signup-form">
                        {/* Sign up form */}
                        <h2>New User Signup!</h2>
                        <form encType="multipart/form-data" onSubmit={handleSubmit}>
                            <FormErros errors={errors} />
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                onChange={handleInput}
                            />
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                onChange={handleInput}
                            />
                            <label>Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleInput}
                            />
                            <label>Phone</label>
                            <input
                                type="tel"
                                placeholder="Phone"
                                name="phone"
                                onChange={handleInput}
                            />
                            <label>Address</label>
                            <input
                                type="text"
                                placeholder="Address"
                                name="address"
                                onChange={handleInput}
                            />
                            <label>Avatar</label>
                            <input
                                type="file"
                                placeholder="Avatar"
                                name="avatar"
                                onChange={handleUserInputFile}
                            />
                            <label>Level</label>
                            <input
                                type="number"
                                placeholder="Level"
                                name="level"
                                onChange={handleInput}
                            />
                            <button type="submit" className="btn btn-default">
                                Signup
                            </button>
                        </form>
                    </div>
                    {/* /sign up form */}
                </div>
            </div>
        </div>
    );
}

export default Register;

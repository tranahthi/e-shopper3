 // const [avatar, setAvatar] = useState(null);
    // const [file, setFile] = useState(null);

    // function handleUserInputFile(e) {
    //     const file = e.target.files[0];
    //     if (file) {
    //         // Kiểm tra kích thước file
    //         const size = 1024 * 1024; // 1MB
    //         if (file.size > size) {
    //             setErrors({ ...errors, file: "Kích thước file phải nhỏ hơn 1MB" });
    //             return;
    //         } else {
    //             const infoFile = {
    //                 name: file.name,
    //                 type: file.type,
    //                 size: file.size
    //             }
    //             console.log(infoFile)
    //             // Kiểm tra loại file
    //             const allowedExtensions = ["png", "jpg", "jpeg"];
    //             const fileExtension = infoFile.name.split('.').pop().toLowerCase();
    //             if (!allowedExtensions.includes(fileExtension)) {
    //                 setErrors({
    //                     ...errors,
    //                     file: "Hãy chọn đúng loại file là hình ảnh",
    //                 });
    //                 return;
    //             } else {
    //                 // Nếu tất cả kiểm tra đều thành công, tiến hành mã hoá file và lưu vào state
    //                 const reader = new FileReader();
    //                 reader.onload = (e) => {
    //                     setAvatar(e.target.result);
    //                     setFile(file);
    //                     setErrors({ ...errors, file: '' }); // Xóa thông báo lỗi
    //                 };
    //                 reader.readAsDataURL(file);
    //             }
    //         }


    //     }
    // }


      // if (!file) {
        //     errorSubmit.avatar = "Vui lòng chọn hình ảnh";
        //     flag = false;
        // }

          // formData.append("avatar",avatar)
          {/* <input type="file" placeholder="Avatar" name="avatar" value={avatar}  onChange={handleUserInputFile} /> */}
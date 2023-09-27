
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

function Comment(props) {
    // const [errors, setErrors] = useState({})

    const { idBlog, addComment,replyToCommentId } = props; //,replyToCommentId
    const [comment, setComment] = useState("")
    // const [addNewComment,setNewComment] = useState([])
    const [isLogin, setIsLogin] = useState(false) // để kiểm tra người dùng đã đăng nhập hay chưa
    const [commentError, setCommentError] = useState(false);
    const navigate = useNavigate()
    let token = localStorage.getItem("token")
    useEffect(() => {
        
        if (token) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }

        // axios.get("http://localhost/laravel8/laravel8/public/api/blog/comment/"+ idBlog )
        // .then(res =>{
        //     console.log(res)
        //     setNewComment(res.data.data)
        // })
        // .then(error => console.log(error))
    }, []) //idBlog
  

    function handleInput(e) {
        const {  value } = e.target
        setComment(value)
    }
    function handleSubmit(e) {
        e.preventDefault()


        if (!isLogin) {
            navigate("/login")
            
        }else if (comment === "") {
            setCommentError(true); // Đặt biến lỗi thành true
            return;
        } else{
            let config = {
                headers:{
                    'Authorization':'Bearer ' + token,
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                }
            }
            var userData = localStorage.getItem("userData")
            if(userData){
                userData = JSON.parse(userData)
            }
            
            const formData = new FormData()
            formData.append('id_blog', idBlog);
            formData.append('id_user', userData.id);
            formData.append('id_comment', replyToCommentId || 0 );
            formData.append('comment', comment);
            formData.append('image_user', userData.avatar);
            formData.append('name_user', userData.name);

           

            axios.post("http://localhost/laravel8/laravel8/public/api/blog/comment/"+ idBlog ,formData,config )
            .then(res =>{
                console.log(res)
                setComment("")

                const newComment = {
                    name_user: userData.name,
                    comment: comment,
                    created_at: new Date().toLocaleString(),
                }
                addComment(newComment) // gọi hàm addcomment được truyền qua props để theem new comment vào post lên api
                
               
            })
            .catch(error => console.log(error))
        }

        // Đặt biến lỗi thành false (nếu người dùng nhập lại bình luận sau khi gửi)
        setCommentError(false);



    }
    return (
        <div className="container" >
            <div className="row">
                <div className="col-sm-9">
                   
                    <div className="replay-box">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2>Leave a replay</h2>
                                <div className="text-area" id="comment-form">
                                    <div className="blank-arrow">
                                        <label>Your Name</label>
                                    </div>
                                    <span>*</span>
                                    {commentError && (
                                        <p style={{ color: 'red' }}>Comment khong duoc de trong.</p>
                                    )}
                                    <textarea name="message" rows={11}  onChange={(event) => handleInput(event)} value={comment}/>
                                    <button className="btn btn-primary" onClick={handleSubmit}>post comment</button>
                                </div>
                            </div>
                        </div>
                    </div>{/*/Repaly Box*/}


                </div>

            </div>

        </div>
    )
}
export default Comment
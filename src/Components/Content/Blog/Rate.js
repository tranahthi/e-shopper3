import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import StarRatings from 'react-star-ratings';

function Rate(props) {
    const [rating, setRating] = useState(0)
    const navigate = useNavigate()


    const [isLogin, setIsLogin] = useState(false)
    const { idBlog,user_id } = props //nhận từ blogdetail
    let token = localStorage.getItem("token")
    useEffect(() => {
        if (token) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    },[token])

    function changeRating(newRating) {
        
        if (!isLogin) {
            navigate("/login")
            return
        } else {
            

            const ratingData = {
                user_id: user_id,
                blog_id: idBlog,
                rate: newRating
            }
            // post lên api phải kèm token
            axios.post("http://localhost/laravel8/laravel8/public/api/blog/rate/" +idBlog,ratingData,
            {
                headers: {
                    'Authorization':'Bearer ' + token,
                }
            })
            
                .then(res => {
                    console.log(res)
                    setRating(newRating)

                })
                .catch(error => console.log(error))
        }


    }

    return (

        <StarRatings
            rating={rating}
            starRatedColor="blue"
            changeRating={changeRating}
            numberOfStars={6}
            name='rating'
        />
    )

}
export default Rate
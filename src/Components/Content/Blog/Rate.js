import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import StarRatings from 'react-star-ratings';

function Rate(props) {
    const { idBlog, user_id } = props //nhận từ blogdetail
    const [averageRating, setAverageRating] = useState(0)
    const [rating, setRating] = useState(0)
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()
    let token = localStorage.getItem("token")
    useEffect(() => {
        if (token) {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
        axios.get(`http://localhost/laravel8/laravel8/public/api/blog/rate/${idBlog}`)
            .then(res => {
                const rateData = res.data.data;
                console.log(rateData)

                if (Object.keys(rateData).length > 0) {
                    // item đại diện cho từng đối tượng trong rateData trong mỗi lần lặp
                    const ratings = Object.values(rateData).map((Item) => Item.rate);
                    //rating: Đây là giá trị của phần tử trong mảng ratings hiện đang được comment.
                    const totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
                    const average = totalRating / ratings.length;
                    setRating(average);
                    setAverageRating(average);
                    // setTotalVotes(ratings.length);
                }
            })
            .catch(error => console.log(error))
    }, [, idBlog, token])

    function changeRating(newRating) {
        setRating(newRating)
        if (!isLogin) {
            navigate("/login")
            // return
        } else {
            const ratingData = {
                user_id: user_id,
                blog_id: idBlog,
                rate: newRating
            }
            // post lên api phải kèm token
            axios.post("http://localhost/laravel8/laravel8/public/api/blog/rate/" + idBlog, ratingData,
                {
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    }
                })
                .then(res => {
                    console.log(res)
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className="rating-area">
            <ul className="ratings">
                <li className="rate-this">Rate this item:</li>
                <li className="color">{averageRating.toFixed(1)} votes</li>
                <StarRatings
                    rating={rating}
                    starRatedColor="orange"
                    changeRating={changeRating}
                    numberOfStars={6}
                    name='rating'
                />
            </ul>
            <ul className="tag">
                <li>TAG:</li>
                <li><a className="color" href>Pink <span>/</span></a></li>
                <li><a className="color" href>T-Shirt <span>/</span></a></li>
                <li><a className="color" href>Girls</a></li>
            </ul>
        </div>

    )
}
export default Rate
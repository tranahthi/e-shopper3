import { useEffect, useState } from "react"
import axios from 'axios';
import { Link } from "react-router-dom";


function Blog() {
    // const [readMoreClicked, setReadMoreClicked] = useState(false);
    const [getItem, setItem] = useState('')
    useEffect(() => {
        axios.get("http://localhost/laravel8/laravel8/public/api/blog")
            .then(res => {
                setItem(res.data.blog.data)
                console.log(res)   
            })
            .catch(function (error) {
                console.log(error)
            })

    }, [])

    function renderData() {
        if (Array.isArray(getItem) && getItem.length >0) {
            // console.log(getItem)
            return getItem.map((value, index) => (
                <div className="single-blog-post" key={index}>
                    <h3>{value.title}</h3>
                    <div className="post-meta">
                        <ul>
                            <li><i className="fa fa-user" /> Mac Doe</li>
                            <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                            <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                        </ul>
                        <span>
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star-half-o" />
                        </span>
                    </div>
                    <a href="/blog/detail">
                        <img src= {"http://localhost/laravel8/laravel8/public/upload/Blog/image/" + value.image} alt="" /> 
                    </a>
                    <p>{value.description}</p>
                    
                    {/* <a className="btn btn-primary" href="#">Read More</a> */}
                    <Link to={"/blog/detail/" + value.id } className="btn btn-primary">Read More </Link>
                </div>
            ));
        } 
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <div className="blog-post-area">
                        <h2 className="title text-center">Latest From our Blog</h2>
                        {renderData()}
                        <div className="pagination-area">
                            <ul className="pagination">
                                <li><a href className="active">1</a></li>
                                <li><a href>2</a></li>
                                <li><a href>3</a></li>
                                <li><a href><i className="fa fa-angle-double-right" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Blog
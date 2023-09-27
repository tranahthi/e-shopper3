import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Comment from "./Comment/Comment"
import ListComment from "./Comment/ListComment"
import Rate from "./Rate"





function BlogDetail(props) {
  const [getItem, setItem] = useState('')
  const [comments, setComments] = useState([])
  const [averageRating, setAverageRating] = useState(0)
  const [totalVotes, setTotalVotes] = useState(0);
  let { id } = useParams()
  const [replyToCommentId, setReplyToCommentId] = useState(null); // Thêm state để theo dõi bình luận đang được reply


  function addComment(newComment) {
    setComments([newComment, ...comments]) // cập nhật lại state comments,thêm comment mới vào (newcomment) vào mảng comments sử dụgn toán tử ... để sao chép tất cả các phần tử hiện có trong comments sau đó thêm comment mới vào đầu mảng và gán bằng comments 
    console.log(comments)
  }
  // Hàm xử lý khi nhấn "Reply" trên một bình luận
  const handleReplyClick = (commentId) => {
    setReplyToCommentId(commentId);
    console.log(commentId)
    // // Cuộn đến phần trả lời bình luận
    // // window.scrollTo({
    // //   top: document.getElementById('comment-form').offsetTop,
    // //   behavior: 'smooth',
    // });
  };
  useEffect(() => {

    axios.get(`http://localhost/laravel8/laravel8/public/api/blog/detail/${id}`)
      .then((res) => {
        setItem(res.data.data)
        setComments(res.data.data.comment) // truyền data của comment vào state setComments
        console.log('o1')
      })
      
      
      .catch(error => console.log(error))
      countRate()
  }, [id])

 

  function renderData() {
    if (getItem !== '') {
      return (
        <div className="single-blog-post" >
          <h3>{getItem.title}</h3>
          <div className="post-meta">
            <ul>
              <li><i className="fa fa-user" /> Mac Doe</li>
              <li><i className="fa fa-clock-o" /> 1:33 pm</li>
              <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
            </ul>

          </div>
          <a href="">
            <img src={"http://localhost/laravel8/laravel8/public/upload/Blog/image/" + getItem.image} alt="" />
          </a>
          {/* <p>{value.description}</p> */}

          <div>{getItem.content}</div>
          <div className="pager-area">
            <ul className="pager pull-right">
              <li><a href="#">Pre</a></li>
              <li><a href="#">Next</a></li>
            </ul>
          </div>
        </div>
      )
    }

  }

  // let userData = localStorage.getItem("userData") //lấy data user từ local xuống để truyền qau component Rate
  // if (userData) {
  //   userData = JSON.parse(userData)
  // }
  // console.log(userData)

  function countRate() {
    axios.get(`http://localhost/laravel8/laravel8/public/api/blog/rate/${id}`)
      .then(res => {
        const rateData = res.data.data;
        console.log(rateData)

        if (Object.keys(rateData).length > 0) {
          const ratings = Object.values(rateData).map((Item) => Item.rate); // item đại diện cho từng đối tượng trong rateData trong mỗi lần lặp
         
          //rating: Đây là giá trị của phần tử trong mảng ratings hiện đang được comment.
          const totalRating = ratings.reduce((acc, rating) => acc + rating, 0); 
          const average = totalRating / ratings.length;
          setAverageRating(average);
          // setTotalVotes(ratings.length);
        }
      })
      .catch(error => console.log(error))
  }
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <div className="blog-post-area">
            <h2 className="title text-center">Latest From our Blog</h2>
            {renderData()}
          </div>{/*/blog-post-area*/}
          <div className="rating-area">
            <ul className="ratings">
              <li className="rate-this">Rate this item:</li>
              {/* truyền cho rate 2 cái là id blog và id của user*/}
              {comments.length>0 && (
                <Rate idBlog={comments[0].id_blog} user_id={comments[0].id_user} /> 
                )}
                
              <li className="color">{averageRating.toFixed(1)} votes</li>
            </ul>
            <ul className="tag">
              <li>TAG:</li>
              <li><a className="color" href>Pink <span>/</span></a></li>
              <li><a className="color" href>T-Shirt <span>/</span></a></li>
              <li><a className="color" href>Girls</a></li>
            </ul>
          </div>{/*/rating-area*/}
          <div className="socials-share">
            <a href><img src="images/blog/socials.png" alt="" /></a>
          </div>
          <ListComment
            comments={comments}
            addComment={addComment}
            handleReplyClick={handleReplyClick}
            replyToCommentId={replyToCommentId} /> {/* truyền comments qua cho ListComment ,addComment={addComment} handleReplyClick={handleReplyClick} replyToCommentId={replyToCommentId}*/}
          <Comment idBlog={getItem.id} addComment={addComment} replyToCommentId={replyToCommentId} /> {/* truyền id của blog và add comment qua cho comment ,replyToCommentId={replyToCommentId} */}


        </div>

      </div>


    </div>
  )
}
export default BlogDetail






















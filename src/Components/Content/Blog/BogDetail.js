import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Comment from "./Comment/Comment"
import ListComment from "./Comment/ListComment"
import Rate from "./Rate"






function BlogDetail(props) {
  const [getItem, setItem] = useState('')
  const [comments, setComments] = useState([])
  // const [totalVotes, setTotalVotes] = useState(0);
  // Thêm state để theo dõi bình luận đang được reply
  const [replyToCommentId, setReplyToCommentId] = useState(null);
  let { id } = useParams()


  function addComment(newComment) {
    // cập nhật lại state comments,thêm comment mới vào (newcomment) vào mảng comments sử dụgn toán tử ... để sao chép tất cả các phần tử hiện có trong comments sau đó thêm comment mới vào đầu mảng và gán bằng comments 
    setComments([newComment, ...comments])
    console.log(comments)
  }
  // Hàm xử lý khi nhấn "Reply" trên một bình luận
  const handleReplyClick = (commentId) => {
    setReplyToCommentId(commentId);
    console.log(commentId);
    const replayBox = document.getElementById('comment-form');
    if (replayBox) {
      replayBox.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {

    axios.get(`http://localhost/laravel8/laravel8/public/api/blog/detail/${id}`)
      .then((res) => {
        setItem(res.data.data)
        setComments(res.data.data.comment) // truyền data của comment vào state setComments
        console.log('o1')
      })
      .catch(error => console.log(error))
    
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
  //lấy data user từ local xuống để truyền qau component Rate
  let userData = localStorage.getItem("userData")
  if (userData) {
    userData = JSON.parse(userData)
  }
  console.log(userData)

  


  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <div className="blog-post-area">
            <h2 className="title text-center">Latest From our Blog</h2>
            {renderData()}
          </div>{/*/blog-post-area*/}
          {/* truyền cho rate 2 cái là id blog và id của user*/}
          <Rate idBlog={getItem.id} user_id={userData.id}  />
          <div className="socials-share">
            <a href><img src="images/blog/socials.png" alt="" /></a>
          </div>
          {/* truyền comments qua cho ListComment ,addComment={addComment} handleReplyClick={handleReplyClick} replyToCommentId={replyToCommentId}*/}
          <ListComment
            comments={comments}
            addComment={addComment}
            handleReplyClick={handleReplyClick}
            replyToCommentId={replyToCommentId} />
          {/* truyền id của blog và add comment qua cho comment ,replyToCommentId={replyToCommentId} */}
          <Comment idBlog={getItem.id} addComment={addComment} replyToCommentId={replyToCommentId} />
        </div>
      </div>
    </div>
  )
}
export default BlogDetail






















import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Comment from "./Comment"



function ListComment(props) {
    let { id } = useParams()
    let { comments,replyToCommentId ,handleReplyClick ,addComment } = props // truyền qua từ blog detail ,replyToCommentId ,handleReplyClick ,addComment

    // const [getComment, setComment] = useState([])


    // useEffect(() => {
    //     setComment(comments)
    // }, [comments])
    // useEffect(() => {
    //     axios.get(`http://localhost/laravel8/laravel8/public/api/blog/detail/${id}`)
    //         .then(res => {
    //             console.log(res)
    //             setComment(res.data.data.comment)
    //         })
    //         .catch(error => console.log(error))
    // },[id])
    function renderComment() {
        console.log(comments)
        if (Array.isArray(comments) && comments.length > 0) {
            return comments.map((value, index) => (
                <ul className="media-list" key={value.id}>
                    <li className="media">
                        <a className="pull-left" href="#">
                            <img className="media-object" alt="" />
                        </a>
                        <div className="media-body">
                            <ul className="sinlge-post-meta">
                                <li><img src={`http://localhost/laravel8/laravel8/public/upload/user/avatar/${value.image_user}` } />{value.name_user}</li>
                                <li><i className="fa fa-clock-o" /> {value.created_at}</li>
                                <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                            </ul>
                            <p>{value.comment}</p>
                            <a className="btn btn-primary" onClick={() =>handleReplyClick(value.id)} ><i className="fa fa-reply" />Replay</a><sub>{value.id}</sub> {/* onClick={() =>handleReplyClick(value.id)}*/}
                            {value.id=== replyToCommentId && (
                                <Comment 
                                 idBlog={value.id_blog} 
                                 addComment={addComment} 
                                 replyToCommentId={value.id_comment}/>
                            )}

                            {/* Hiển thị bình luận con (nếu có) */}
                            {/* {value.replies && value.replies.length > 0 && (
                                <div className="replies" style={{border:"2px solid red"}} >
                                    {value.replies.map((reply, replyIndex) => (
                                        <ul className="media-list" key={replyIndex}>
                                            <li className="media">
                                                <a className="pull-left" href="#">
                                                    <img className="media-object" alt="" />
                                                </a>
                                                <div className="media-body">
                                                    <ul className="sinlge-post-meta replies" >
                                                        <li>
                                                            <img src={"http://localhost/laravel8/laravel8/public/upload/user/avatar/" + reply.image_user} alt={reply.name_user} />
                                                            {reply.name_user}
                                                        </li>
                                                        <li><i className="fa fa-clock-o" /> {reply.created_at}</li>
                                                        <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                                                    </ul>
                                                    <p>{reply.comment}</p>
                                                    <a className="btn btn-primary" onClick={() => onReplyClick(reply.id)}><i className="fa fa-reply" />Reply</a>
                                                </div>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            )} */}
                        </div>
                    </li>
                </ul>
            ))
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <div className="response-area" >
                        <h2>{comments.length} RESPONSES</h2>
                        {renderComment()}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ListComment
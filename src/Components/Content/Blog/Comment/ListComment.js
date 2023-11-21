// import axios from "axios"
// import { Children, useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import Comment from "./Comment"



function ListComment(props) {
    // let { id } = useParams()
    // truyền qua từ blog detail ,replyToCommentId ,handleReplyClick ,addComment
    let { comments,  handleReplyClick } = props 

    function renderComment() {
        if (Array.isArray(comments) && comments.length > 0) {
            return comments.map((value) => {
                if (value.id_comment === 0) {
                    return (
                        <>
                            <li className="media" key={value.id}>
                                <a className="pull-left" href="#">
                                    <img className="media-object" alt="" />
                                </a>
                                <div className="media-body" >
                                    <ul className="sinlge-post-meta">
                                        <li><img src={`http://localhost/laravel8/laravel8/public/upload/user/avatar/${value.image_user}`} />{value.name_user}</li>
                                        {console.log(value.image_user)}
                                        <li><i className="fa fa-clock-o" /> {value.created_at}</li>
                                        <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                                    </ul>
                                    <p>{value.comment}</p>
                                    <a className="btn btn-primary" onClick={() => handleReplyClick(value.id)} ><i className="fa fa-reply" />Replay</a><sub>{value.id}</sub> {/* onClick={() =>handleReplyClick(value.id)}*/}
                                </div>
                            </li>
                            {
                                comments.map((childComment) => {
                                    if (childComment.id_comment === value.id) {
                                        return (
                                            <li className="media reply" key={value.id} style={{margin:"50px"}}>
                                                <a className="pull-left" href="#">
                                                    <img className="media-object" alt="" />
                                                </a>
                                                <div className="child-comment" key={childComment.id}>
                                                    <ul className="sinlge-post-meta reply">
                                                        {console.log(childComment.image_user)}
                                                        <li><img src={`http://localhost/laravel8/laravel8/public/upload/user/avatar/${childComment.image_user}`} />{childComment.name_user}</li>
                                                        <li><i className="fa fa-clock-o" /> {childComment.created_at}</li>
                                                        <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                                                    </ul>
                                                    <p>{childComment.comment}</p>
                                                </div>
                                            </li>
                                        );
                                    }

                                })
                            }
                        </>
                    )

                }

            })


        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <div className="response-area" >
                        <h2>{comments.length} RESPONSES</h2>
                        <ul className="media-list">
                            {renderComment()}
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )

}
export default ListComment


import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




function BlogDetail(){
    const [getItem, setItem] = useState('')
    let {id} = useParams()
    useEffect(() =>{
        axios.get(`http://localhost/laravel8/laravel8/public/api/blog/detail/${id}`)
        .then((res) =>{
            setItem(res.data.data)
            console.log('o1')
        })
    },[id])
   
    function renderData(){
        if( getItem !== ''){
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
                      <img src={"http://localhost/laravel8/laravel8/public/upload/Blog/image/"+ getItem.image} alt="" />
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

    return(
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
            <li>
              <i className="fa fa-star color" />
              <i className="fa fa-star color" />
              <i className="fa fa-star color" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </li>
            <li className="color">(6 votes)</li>
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
        </div>{/*/socials-share*/}
        {/* <div class="media commnets">
						<a class="pull-left" href="#">
							<img class="media-object" src="images/blog/man-one.jpg" alt="">
						</a>
						<div class="media-body">
							<h4 class="media-heading">Annie Davis</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
							<div class="blog-socials">
								<ul>
									<li><a href=""><i class="fa fa-facebook"></i></a></li>
									<li><a href=""><i class="fa fa-twitter"></i></a></li>
									<li><a href=""><i class="fa fa-dribbble"></i></a></li>
									<li><a href=""><i class="fa fa-google-plus"></i></a></li>
								</ul>
								<a class="btn btn-primary" href="">Other Posts</a>
							</div>
						</div>
					</div> */}{/*Comments*/}
        <div className="response-area">
          <h2>3 RESPONSES</h2>
          <ul className="media-list">
            <li className="media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-two.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-four.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
            <li className="media second-media">
              <a className="pull-left" href="#">
                <img className="media-object" src="images/blog/man-three.jpg" alt="" />
              </a>
              <div className="media-body">
                <ul className="sinlge-post-meta">
                  <li><i className="fa fa-user" />Janis Gallagher</li>
                  <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                  <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn btn-primary" href><i className="fa fa-reply" />Replay</a>
              </div>
            </li>
          </ul>					
        </div>{/*/Response-area*/}
        <div className="replay-box">
          <div className="row">
            <div className="col-sm-12">
              <h2>Leave a replay</h2>
              <div className="text-area">
                <div className="blank-arrow">
                  <label>Your Name</label>
                </div>
                <span>*</span>
                <textarea name="message" rows={11} defaultValue={""} />
                <a className="btn btn-primary" href>post comment</a>
              </div>
            </div>
          </div>
        </div>{/*/Repaly Box*/}
      </div>

          </div>
        

      </div>
    )
}
export default BlogDetail






















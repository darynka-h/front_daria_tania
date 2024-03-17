import {Link} from 'react-router-dom';
import "./post.css";
import { MoreVert } from '@mui/icons-material';
import { useState } from "react";


export default function Post({ post }) {

const json_data = require('../../user_data');
const str_json = JSON.stringify(json_data)
const json_data_dict = JSON.parse(str_json);

  const [like,setLike] = useState(parseInt(json_data_dict[0].posts[0].likes))
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }


  return (
    <div className="post">
          <div className="postWrapper">
            <div className="postTop">
              <>{post}</>

              <div className="postTopLeft" >

                <Link to="/personal"><img src={json_data_dict[0].avatar} alt="" className="postProfileImg"/></Link>
                <span className="postUsername"> {json_data_dict[0].first_name} {json_data_dict[0].last_name}
                 
                </span>
                <span className="postDate">15 minutes ago</span>
              </div>

              <div className="postTopRight">
                <MoreVert />
              </div>
            </div>

            <div className="postCenter" >
              <span className="postText">GoTeens!</span>
              <img className="postImg" src={json_data_dict[0].posts[0].photo} alt="" />
            </div>

            <div className="postBottom">
              <div className="postBottomLeft">
                
                <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                <span className="postLikeCounter">{like} people like it</span>
              </div>
              <div className="postBottomRight">
                <Link to="/comments"><span className="postCommentText">{json_data_dict[0].posts[0].comments.length} comments</span></Link>
              </div> 
            </div>
          </div>
        </div>
      );
    }

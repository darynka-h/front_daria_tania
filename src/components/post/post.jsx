import "./post.css";
import data from "C:\\Users\\Daria\\front_daria_tania\\src\\users_data.json"
import {Link} from 'react-router-dom';
// import { MoreVert } from '@mui/icons-material';
// import { Users } from "../../dummyData";
// import { useState } from "react";

//   className="postProfileImg"
            //   src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
            //   alt=""

export default function Post({ post }) {
//   const [like,setLike] = useState(post.like)
//   const [isLiked,setIsLiked] = useState(false)

//   const likeHandler =()=>{
//     setLike(isLiked ? like-1 : like+1)
//     setIsLiked(!isLiked)
//   }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
        {data.map((data, i) => (
          <div className="postTopLeft" key={i}>

            <Link to="/personal"><img src={data.avatar} alt="" className="postProfileImg"/></Link>
            <span className="postUsername"> {data.first_name} {data.last_name}
              {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
            </span>
            <span className="postDate">15 minutes ago</span>
          </div>
            ))
        }
          {/* <div className="postTopRight">
            <MoreVert />
          </div> */}
        </div>
        {data.map((data, i) => (
        <div className="postCenter" key = {i}>
          <span className="postText">GoTeens!</span>
          <img className="postImg" src={data.posts[0].photo} alt="" />
        </div>
            ))
          }
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/heart.png" alt="" />
            {/* <span className="postLikeCounter">{like} people like it</span> */}
          </div>
          { data.map((data, i) => (
          <div className="postBottomRight" key = {i}>
            <Link to="/comments"><span className="postCommentText">{data.posts[0].comments.length} comments</span></Link>
            {/* <span className="postCommentText">{data.posts[0].comments.length} comments</span> */}
          </div> ))
        }
        </div>
      </div>
    </div>
  );
}

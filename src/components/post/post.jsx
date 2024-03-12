import "./post.css";
import data from "C:\\Users\\Daria\\front_daria_tania\\src\\users_data.json"
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

            <img src={data.avatar} alt="" className="postProfileImg"/>
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
        <div className="postCenter">
          <span className="postText">GoTeens!</span>
          <img className="postImg" src="https://ucummunity-storage.s3.eu-north-1.amazonaws.com/2024-03-09%201325a5a0cc313f452ca76df4d7ebdd9ef6.webp" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/heart.png" alt="" />
            {/* <span className="postLikeCounter">{like} people like it</span> */}
          </div>
          { data.map((data, i) => (
          <div className="postBottomRight" key = {i}>
            <span className="postCommentText">{data.posts[0].comments.length} comments</span>
          </div> ))
        }
        </div>
      </div>
    </div>
  );
}

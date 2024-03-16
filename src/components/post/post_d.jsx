import {Link} from 'react-router-dom';
import "./post.css";
import { MoreVert } from '@mui/icons-material';
// import data from 'C:\\Users\\Daria\\front_daria_tania\\src\\user_data.json'
// import { Users } from "../../dummyData";
import { useState } from "react";

//   className="postProfileImg"
            //   src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
            //   alt=""

export default function Post({ post }) {
  // ======================
//   const [like,setLike] = useState(post.like)
//   const [isLiked,setIsLiked] = useState(false)

//   const likeHandler =()=>{
//     setLike(isLiked ? like-1 : like+1)
//     setIsLiked(!isLiked)
//   }
const json_data = require('C:\\Users\\Daria\\front_daria_tania\\src\\user_data.json');
const str_json = JSON.stringify(json_data)
const json_data_dict = JSON.parse(str_json);

  const [like,setLike] = useState(parseInt(json_data_dict[0].posts[0].likes))
  const [isLiked,setIsLiked] = useState(false)

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }


  return (
//     <div className="post">
//       <div className="postWrapper">
//         <div className="postTop">
//           <>{post}</>
//         {data.map((data, i) => (
//           <div className="postTopLeft" >

//             <Link to="/personal"><img src={data.avatar} alt="" className="postProfileImg"/></Link>
//             <span className="postUsername"> {data.first_name} {data.last_name}
//               {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
//             </span>
//             <span className="postDate">15 minutes ago</span>
//           </div>
//             ))
//         }
//           <div className="postTopRight">
//             <MoreVert />
//           </div>
//         </div>
//         {data.map((data, i) => (
//         <div className="postCenter" >
//           <span className="postText">GoTeens!</span>
//           <img className="postImg" src={data.posts[i].photo} alt="" />
//         </div>
//             ))
//           }
//         <div className="postBottom">
//           <div className="postBottomLeft">
//             <img className="likeIcon" src="assets/heart.png" alt="" />
//             {/* <span className="postLikeCounter">{like} people like it</span> */}
//           </div>

//           { data.map((data, i) => (
//           <div className="postBottomRight">
//             <Link to="/comments"><span className="postCommentText">{data.posts[0].comments.length} comments</span></Link>
//             {/* <span className="postCommentText">{data.posts[0].comments.length} comments</span> */}
//           </div> ))
//         }
//         </div>
//       </div>
//     </div>
//   );
// }
    <div className="post">
          <div className="postWrapper">
            <div className="postTop">
              <>{post}</>

              <div className="postTopLeft" >

                <Link to="/personal"><img src={json_data_dict[0].avatar} alt="" className="postProfileImg"/></Link>
                <span className="postUsername"> {json_data_dict[0].first_name} {json_data_dict[0].last_name}
                  {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
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
                {/* <img className="likeIcon" src="assets/heart.png" alt="" /> */}
                {/* <span className="postLikeCounter">{like} people like it</span> */}
                {/* <span className="postLikeCounter">{json_data_dict[0].posts[0].likes} people like it</span> */}
                <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                <span className="postLikeCounter">{like} people like it</span>
              </div>

              <div className="postBottomRight">
                <Link to="/comments"><span className="postCommentText">{json_data_dict[0].posts[0].comments.length} comments</span></Link>
                {/* <span className="postCommentText">{data.posts[0].comments.length} comments</span> */}
              </div> 
            </div>
          </div>
        </div>
      );
    }



// import "./post.css";
// import { MoreVert } from "@mui/icons-material";
// import { Users } from "../../user_data.js";
// import { useState } from "react";

// export default function Post({ post }) {
// //   const [like,setLike] = useState(post.like)
// //   const [isLiked,setIsLiked] = useState(false)

// //   const likeHandler =()=>{
// //     setLike(isLiked ? like-1 : like+1)
// //     setIsLiked(!isLiked)
// //   }
//   return (
//     <div className="post">
//       <div className="postWrapper">
//         <div className="postTop">
//           <div className="postTopLeft">
//             <img
//               className="postProfileImg"
//               src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
//               alt=""
//             />
//             <span className="postUsername">
//               {Users.filter((u) => u.id === post?.userId)[0].username}
//             </span>
//             <span className="postDate">{post.date}</span>
//           </div>
//           <div className="postTopRight">
//             <MoreVert />
//           </div>
//         </div>
//         <div className="postCenter">
//           <span className="postText">{post?.desc}</span>
//           <img className="postImg" src={post.photo} alt="" />
//         </div>
//         <div className="postBottom">
//           <div className="postBottomLeft">
//             {/* <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
//             <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" /> */}
//             {/* <span className="postLikeCounter">{like} people like it</span> */}
//           </div>
//           <div className="postBottomRight">
//             <span className="postCommentText">{post.comment} comments</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
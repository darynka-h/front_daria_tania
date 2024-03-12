// import "./post.css";
// =================
// import { MoreVert } from '@mui/icons-material';
// import { Users } from "../../dummyData";
// import { useState } from "react";
// ==========================
//   className="postProfileImg"
            //   src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
            //   alt=""
// =====================================================
// export default function Post({ post }) {

//   return (
//     <div className="post">
//       <div className="postWrapper">
//         <div className="postTop">
//           <div className="postTopLeft">
//             {/* <img src="./public/assert/photo1.jpg" alt="" className="postProfileImg"/> */}
//             <img className="postProfileImg" src="https://ucummunity-storage.s3.eu-north-1.amazonaws.com/2024-03-09%201325a5a0cc313f452ca76df4d7ebdd9ef6.webp" alt="" />
//             <span className="postUsername"> Дмитро Лопушанський
//               {/* {Users.filter((u) => u.id === post?.userId)[0].username} */}
//             </span>
//             <span className="postDate">15 minutes ago</span>
//           </div>
//           {/* <div className="postTopRight">
//             <MoreVert />
//           </div> */}
//         </div>
//         <div className="postCenter">
//           <span className="postText">GoTeens!</span>
//           <img className="postImg" src="https://ucummunity-storage.s3.eu-north-1.amazonaws.com/2024-03-09%201325a5a0cc313f452ca76df4d7ebdd9ef6.webp" alt="" />
//         </div>
//         <div className="postBottom">
//           <div className="postBottomLeft">
//             <img className="likeIcon" src="assets/photo1.png" alt="" />
//             {/* <span className="postLikeCounter">{like} people like it</span> */}
//           </div>
//           <div className="postBottomRight">
//             <span className="postCommentText">5 comments</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../users_data";
import { useState } from "react";

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
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            {/* <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" /> */}
            {/* <span className="postLikeCounter">{like} people like it</span> */}
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

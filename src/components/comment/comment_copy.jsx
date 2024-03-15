import { useContext } from "react";
import "./comment_copy.scss";
// import { AuthContext } from "../../context/authContext";
import data from "C:\\Users\\Daria\\front_daria_tania\\src\\users_data.json"

const Comments = () => {
  // const { currentUser } = useContext(AuthContext);
  return (
    <div className="comments">
      <div className="write">
        {/* <img src={currentUser.profilePic} alt="" /> */}
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {data.posts[0].comments[0].map((comment) => (
        <div className="comment">
          <img src={comment.avatar} alt="" />
          <div className="info">
            <span>{comment.username}</span>
            <p>{comment.text}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
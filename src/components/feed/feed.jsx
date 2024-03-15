// import Post from "../post/Post";
// import Share from "../share/Share";
import "./feed.css";
// import { Posts } from "../../dummyData";
import Post from "../post/post";
// import data from 'C:\\Users\\User\\Desktop\\op\\cucu_front\\src\\user_data.json';

export default function Feed({post_ids}) {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Post/>
        {/*
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
}
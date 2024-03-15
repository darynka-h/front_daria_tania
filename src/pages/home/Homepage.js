import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/feed";
import CommentOn from "../../components/comment/comment";
import Rightbar from "../../components/Rightbar/rightbar";
import "./home.css"
// import CommentOn from "../../components/comment/comment";

export default function Homepage() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Feed/>
        {/* <CommentOn/> */}
        <span></span>
        <div className="try"></div>
        <Rightbar/>
      </div>
    </>
  );
}
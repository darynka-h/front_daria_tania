import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/Rightbar/rightbar";
import "./home.css"

export default function Homepage() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}
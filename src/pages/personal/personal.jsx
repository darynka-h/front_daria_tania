import './personal.css';
import '../../components/feed/feed.css';
import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
import Post from "../../components/post/post";
import data from 'C:\\Users\\User\\Desktop\\op\\cucu_front\\src\\user_data.json';

export default function Personal() {
    return (
        <>
        <Topbar />
        <div className="profileTop">
            <div className="profileInfo">
                <div className="profileinfoLeft">
                    <img className="profileUserImg" src="assets/userphoto1.jpg" alt="" />
                </div>  
                <div className="profileInfoRight">
                    <h2 className="profileInfoName">Дмитро Лопушанський</h2>
                    <h4 className="profileInfoDesc">Frontend Developer</h4>
                    <h6 className="profileInfoDesc">email@ucu.edu.ua</h6>

                </div>  
            </div>
        </div>
        <div className="profileBottom">
            <div className="feed">
                <div className="feedWrapper">
                    <Post/>
                    {/* {Posts.map(post => (
                    <Post post={post} key={post.id}  />
                    ))} */}
                </div>
            </div>
        </div>

    </>
    )
}
import './personal.css';
import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/feed";


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
            <Feed/>
        </div>

    </>
    )
}
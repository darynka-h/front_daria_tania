import "./comment.css";
import data from "C:\\Users\\Daria\\front_daria_tania\\src\\users_data.json"
// import { Users } from "../../dummyData";
// import CloseFriend from "../closeFriend/CloseFriend";

export default function CommentOn() {
    return (
    <div className="Container">
        <div className="middlebar">
            <h4 className="rightbarTitle">Коментарі</h4>
            <ul className="sidebarChannalList">
                <li className="sidebarChannalList">
                
                {data.map((data, i) => (
                    <div className="sidebarFriend" key={i}>
                        <img className="sidebarFriendImg" src={data.posts[0].comments[0].avatar} alt="" />
                        <span className="postDate">{data.posts[0].comments[0].text}</span>
                    </div>
                    ))
                }
                {data.map((data, i) => (
                    <div className="sidebarFriend" key={i+1}>
                        <img className="sidebarFriendImg" src={data.posts[0].comments[0].avatar} alt="" />
                        <span className="postDate">{data.posts[0].comments[i+1].text}</span>
                    </div>
                    ))
                }
                {data.map((data, i) => (
                    <div className="sidebarFriend" key={i}>
                        <img className="sidebarFriendImg" src={data.posts[0].comments[0].avatar} alt="" />
                        <span className="postDate">{data.posts[0].comments[i+1].text}</span>
                    </div>
                    ))
                }
                    {/* <div className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/so4.png" alt="" />
                        <span className="sidebarFriendName">UCU Blog</span>
                    </div> */}
                    
            
                </li>
            </ul>
        </div>
    </div>
    )
}
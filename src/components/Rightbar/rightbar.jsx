import "./rightbar.css";
// import { Users } from "../../dummyData";
// import CloseFriend from "../closeFriend/CloseFriend";

export default function Rightbar() {
    return (
        <div className="rightbar">
            <h4 className="rightbarTitle">Канали</h4>
            <ul className="sidebarChannalList">
                <li className="sidebarChannalList">
                    <div className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/so1.png" alt="" />
                        <span className="sidebarFriendName">ОССА</span>
                    </div>
                    <div className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/so2.png" alt="" />
                        <span className="sidebarFriendName">Політ Клуб</span>
                    </div>
                    <div className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/so3.png" alt="" />
                        <span className="sidebarFriendName">UCU Debate Club</span>
                    </div>
                    <div className="sidebarFriend">
                        <img className="sidebarFriendImg" src="/assets/so4.png" alt="" />
                        <span className="sidebarFriendName">UCU Blog</span>
                    </div>
                 {/* {Users.map((u) => ( 
                //     <CloseFriend key={u.id} user={u} />
            // ))} */}
                </li>
            </ul>
        </div>
    )
}
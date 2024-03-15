import "./rightbar.css";
// import { Users } from "../../dummyData";
// import CloseChannal from "../closeChannal/CloseChannal";

export default function Rightbar() {
    return (
        <div className="rightbar">
            <h4 className="rightbarTitle">Канали</h4>
            <ul className="sidebarChannalList">
                    <li className="sidebarChannal">
                        <img className="sidebarChannalImg" src="/assets/so1.png" alt="" />
                        <span className="sidebarChannalName">ОССА</span>
                    </li>
                    <li className="sidebarChannal">
                        <img className="sidebarChannalImg" src="/assets/so2.png" alt="" />
                        <span className="sidebarChannalName">Політ Клуб</span>
                    </li>
                    <li className="sidebarChannal">
                        <img className="sidebarChannalImg" src="/assets/so3.png" alt="" />
                        <span className="sidebarChannalName">UCU Debate Club</span>
                    </li>
                    <li className="sidebarChannal">
                        <img className="sidebarChannalImg" src="/assets/so4.png" alt="" />
                        <span className="sidebarChannalName">UCU Blog</span>
                    </li>
                 {/* {Users.map((u) => ( 
                //     <CloseChannal key={u.id} user={u} />
            // ))} */}
            </ul>
        </div>
    )
}
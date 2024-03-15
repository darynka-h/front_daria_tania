import './comments.css';
import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/feed";
import data from "../../user_data.json"


// export default function Comments() {
//     return (
//         <>
//         <Topbar />
//         <div className="profileTop">
//             <div className="profileInfo">
//             {data.map((data, i) => (
//                 <div className="profileinfoLeft" key={i}>
//                     <img className="profileUserImg" src={data.posts[0].comments[0].avatar} alt="" />

//                 </div>  
//                     ))
//                 }
//                 {/* <div className="profileInfoRight">
//                     <h2 className="profileInfoName">Дмитро Лопушанський</h2>
//                     <h4 className="profileInfoDesc">Frontend Developer</h4>
//                     <h6 className="profileInfoDesc">email@ucu.edu.ua</h6>

//                 </div>   */}
//                 {data.map((data, i) => (
//                     <div className="profileInfoRight" key={i}>
//                         {/* <img className="profileInfoDesc" src={data.posts[0].comments[0].avatar} alt="" /> */}
//                         <span className="profileInfoDesc">{data.posts[0].comments[0].text}</span>
//                     </div>
//                     ))
//                 }
//             </div>
//         </div>
//         {/* <div className="profileBottom">
//             <Feed/>
//         </div> */}

//     </>
//     )
// }
// ============================================================================================

// export default function Comments() {
//     return (
//         <>
//         <Topbar />
//         {/* <div className="sidebarFriend"> */}
            
//         {/* </div> */}
//         <div className="profileTop">
//         <span className='cent'>КОМЕНТАРІ </span>
//         </div>
//         <div className="profileTop">
                
//                 <li className="sidebarChannalList">
                
//                 {data.map((data, i) => (
//                     <div className="sidebarFriend" key={i}>
//                         <img className="sidebarFriendImg" src={data.posts[0].comments[0].avatar} alt="" />
//                         <span className="postDate">{data.posts[0].comments[0].text}</span>
//                     </div>
//                     ))
//                 }
//                 {data.map((data, i) => (
//                     <div className="sidebarFriend" key={i+1}>
//                         <img className="sidebarFriendImg" src={data.posts[0].comments[0].avatar} alt="" />
//                         <span className="postDate">{data.posts[0].comments[i+1].text}</span>
//                     </div>
//                     ))
//                 }
//                 {data.map((data, i) => (
//                     <div className="sidebarFriend" key={i}>
//                         <img className="sidebarFriendImg" src={data.posts[0].comments[0].avatar} alt="" />
//                         <span className="postDate">{data.posts[0].comments[i+1].text}</span>
//                     </div>
//                     ))
//                 }
//                     {/* <div className="sidebarFriend">
//                         <img className="sidebarFriendImg" src="/assets/so4.png" alt="" />
//                         <span className="sidebarFriendName">UCU Blog</span>
//                     </div> */}
                    
            
//                 </li>
//             {/* </ul> */}
//         </div>

//     </>
//     )
// }


export default function Comments() {
    return (
        <>
            <Topbar />

            <div className="profileTop">
                <span className='cent'>КОМЕНТАРІ </span>
            </div>
            
            <div className="profileTop">
                <li className="sidebarCommentList">
                    {data.map((dataItem, dataIndex) => (
                        <div key={dataIndex}>
                            {dataItem.posts[0].comments.map((comment, commentIndex) => (
                                <div className="sidebarFriend" key={`${dataIndex}-${commentIndex}`}>
                                    <img className="sidebarFriendImg" src={comment.avatar} alt="" />
                                    <div>
                                        <h4 className="postUsername">{comment.username}</h4>
                                        <h4 className="postDate">{comment.text}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </li>
            </div>

        </>
    );
}
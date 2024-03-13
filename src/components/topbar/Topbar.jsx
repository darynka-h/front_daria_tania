import './topbar.css';
import {Button, Modal} from "react-bootstrap";
import Addpost from '../addpost/addpost';
import {Link} from 'react-router-dom';
import {AddBox, Search, Face2, CalendarMonth} from '@mui/icons-material';
import React from 'react';

export default function Topbar() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className='topbarContainer'>
            <Addpost show={modalShow} onHide={() => setModalShow(false)}/>
            <div className="topbarLeft">
                <Link to="/"> <span className="logo">CUCU</span> </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon'/>
                    <input placeholder="Search for friend, post or video" 
                           className="searchInput" color="#eff0f6"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <AddBox onClick={() => setModalShow(true)}/>
                    </div>
                    <div className="topbarIconItem">
                        <Face2/>
                    </div>
                    <div className="topbarIconItem">
                        <CalendarMonth/>
                    </div>
                </div>
                <Link to="/personal" ><img src="/assets/userphoto1.jpg" alt="" className="topbarImg"/> </Link> 
            </div>
        </div>
    );
}

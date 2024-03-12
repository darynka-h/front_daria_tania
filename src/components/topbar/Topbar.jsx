import './topbar.css';
import {Home, Search, Person, CalendarMonth} from '@mui/icons-material'
export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">CUCU</span>
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
                        <Home/>
                    </div>
                    <div className="topbarIconItem">
                        <Person/>
                    </div>
                    <div className="topbarIconItem">
                        <CalendarMonth/>
                    </div>
                </div>
                <img src="/assets/userphoto1.jpg" alt="" className="topbarImg"/>  
            </div>
        </div>
    );
}
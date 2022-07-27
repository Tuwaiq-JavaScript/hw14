import {  FiHeart } from 'react-icons/fi';
// import {home} from 'react-icons-kit/icomoon/home'
import{MdHomeFilled} from 'react-icons/md'
import{RiSendPlaneFill} from 'react-icons/ri'
import{CgAddR} from 'react-icons/cg'
import{TiCompass} from 'react-icons/ti'
// import { Navbar } from '../data';
// import {camera} from 'react-icons-kit/icomoon/camera'
// interface navProps {
// 	navbar: Navbar;
// }

export function Navb() {
return (
    <div className='navbar'>
    <div className='logo'>
     <h1>t9aweer</h1>
     </div>
         <div className="navigation-search-container">
         <input className="search-field" type="text" placeholder="Search"/>
         <div className="search-container">
       <div className="search-container-box">
         </div>
   </div>
         </div>
         
 
         <div className="navigation-icons">
         <div className='icons'>
             <MdHomeFilled/>
             <RiSendPlaneFill/>
             <CgAddR/>
             <TiCompass/>
             <FiHeart/>
             </div> 
            </div>
            </div>
        
  );
 }
    // return (
        
    //     < div className='nav'>
    //         <div className="logo">
    //     <h3 className="no-underline" >
    //       T9aweer
    //     </h3>
    //   </div>
    //   <div className="#">

    //     <input className="search-field" type="text" placeholder="Search"/>
    //     <i className="fa fa-search"></i>
    //     <div className="search-container">
    //       <div className="search-container-box">
    //         <div className="search-results">
    
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="navigation-icons">
       
    //       <i className="far fa-compass"></i>
    //       <i className="far fa-heart">
    //         <div className="notification-bubble-wrapper">
    //           <div className="notification-bubble">
    //             <span className="notifications-count">99</span>
    //           </div>
    //         </div>
    //       </i>
    //     </div>
        
    //       <i className="far fa-user-circle"></i>

    //       <i className="fas fa-sign-out-alt"></i>
    //   </div>

        
    // )}
    
 
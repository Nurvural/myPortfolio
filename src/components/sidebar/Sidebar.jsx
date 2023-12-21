import React from 'react'
import "./Sidebar.css"

function Sidebar(){
  return (
    <>
    <aside className='aside'>
        <nav className='nav'>
            <div className='nav_menu'>
                <ul className='nav_list'>
                   <li className='nav_item'>
                     <a href="#home" className='nav_link'>
                        <i className='icon-home'></i>
                     </a>
                   </li>
                   <li className='nav_item'>
                     <a href="#about" className='nav_link'>
                     <i className='icon-user-female'></i>
                     </a>
                   </li>
                   <li className='nav_item'>
                     <a href="#services" className='nav_link'>
                     <i className='icon-briefcase'></i>
                     </a>
                   </li>
                   <li className='nav_item'>
                     <a href="" className='nav_link'>
                     <i className='icon-graduation'></i>
                     </a>
                   </li>
                   <li className='nav_item'>
                     <a href="" className='nav_link'>
                     <i className='icon-briefcase'></i>
                     </a>
                   </li>
                </ul>

            </div>

        </nav>
      <div className='nav_footer'>
        <span className="copyright">&copy; 2023</span>
      </div>
    </aside>
    </>
   
  )
}

export default Sidebar
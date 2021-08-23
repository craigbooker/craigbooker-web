import React from 'react'
import MobileLinks from '../constants/mobileLinks'
import Categories from '../components/Categories'
import { IoMdClose } from 'react-icons/io'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'showSidebar' : ''}`}>
      <button className="close-btn" onClick={toggle}>
        <IoMdClose />
      </button>
      <div className="sidebar-container">
        <MobileLinks styleClass="sidebar-links">
          {/* <Categories /> */}
        </MobileLinks>
      </div>
    </aside>
  )
}

export default Sidebar

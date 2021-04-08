import React from 'react'

//import arrowDown from 'assets/images/arrow-down.png'
import { FaChevronDown } from 'react-icons/fa';
//import logo from 'assets/images/logo.png'
import { FaArtstation } from 'react-icons/fa';
import { FaRegBell } from 'react-icons/fa';
//import bellIcon from 'assets/images/bell.png'
//import settingIcon from 'assets/images/settings.png'
import { FaRegSun } from 'react-icons/fa'
import { FaFortAwesomeAlt } from 'react-icons/fa';
//import profileIcon from 'assets/images/avatar.png'
import buildClassName from '../../Utils/Utils.js'
import styles from './NavBar.module.scss'

//import { FaRegSun } from 'react-icons/fa';



const NavBar = () => {
  return (
    <nav className={styles.Navigation}>
      <div>
        <img src={FaArtstation} alt="Logo" />
      </div>
      <ul className={styles.NavItems}>
        <li className={styles.NavItem}>Dashboard</li>
        <li className={styles.NavItem}>
          Courses
          <img src={FaChevronDown} alt="Courses" />
        </li>
        <li className={styles.NavItem}>Schedule</li>
        <li className={styles.NavItem}>Study Groups</li>
        <li className={styles.NavItem}>Ticket </li>
        <li className={styles.NavItem}>
          Profile
          <img src={FaChevronDown} alt="Profile" />
        </li>
        <li className={buildClassName(styles.NavItem, styles.NavItemRelative)}>
          <img src={FaRegBell} alt="Bell" />
          <div className={styles.NavItemBadge}>2</div>
        </li>
        <li className={styles.NavItem}>
          <img src={FaRegSun} alt="Setting" />
        </li>
        <li className={buildClassName(styles.NavItem, styles.NavItemRelative)}>
          <div>
            <img src={FaFortAwesomeAlt} alt="Profile" />
            <div className={styles.NavItemActive} />
          </div>
        </li>
      </ul>
    </nav>
  )
}


export default NavBar
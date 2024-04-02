import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { FaBars, FaBookMedical, FaHome,  FaLanguage,  FaUser } from "react-icons/fa";
import { FaHandHoldingHeart } from 'react-icons/fa';
import { BsFillPostcardFill, BsPersonAdd } from 'react-icons/bs';
import { MdAddAPhoto, MdChildCare,  } from 'react-icons/md';
import {  BiSolidContact } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { FaBlog, } from 'react-icons/fa6';
import Manasheal from "./MANSHEAL.png";
import './SideBar.css'
const routes = [
  {
    path: '/progress',
    name: 'Profile',
    icon: <FaUser/>,
  },
  {
    path: '/',
    name: 'Home',
    icon: <FaHome />,
  },
  {
    path: '/about',
    name: 'About',
    icon: <FaUser />,
  },
  {
    path: '/services',
    name: 'Services',
    icon: <FaHandHoldingHeart />,
    subRoutes: [
      {
        path: '/services/adult',
        name: 'Adult Therapy ',
        icon: <BsPersonAdd />,
      },
      {
        path: '/services/child',
        name: 'Child Therapy',
        icon: <MdChildCare />,
      },
    ],
  },
  {
    path: '/blog',
    name: 'Blog',
    icon: <FaBlog />,
    subRoutes: [
      {
        path: '/blog/posts',
        name: 'Posts',
        icon: <BsFillPostcardFill />,
      },
      {
        path: '/blog/addpost',
        name: 'Add Post',
        icon: <MdAddAPhoto />,
      },
    ],
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: <BiSolidContact />,
  },
  {
    path: '/book',
    name: 'Book Appointment',
    icon: <FaBookMedical />,
  },

];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: 'auto',
      transition: {
        duration: 0.5,
      },
    },
  };


  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate';
    script.async = true;
    document.head.appendChild(script);

    // Callback function to create the translation widget
    window.loadGoogleTranslate = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_element');
    };

    // Clean up
    return () => {
      document.head.removeChild(script);
      delete window.loadGoogleTranslate;
    };
  }, []);


  return (
    <div className="main-container">
      <div className="sidebar-wrapper">
        <motion.div
          initial={{ width: 45 }}
          animate={{ width: isOpen ? 200 : 45 }}
          transition={{ duration: 0.5 }}
          className={`sidebar ${isOpen ? 'open' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="top_section">
            <h1 className="logo">
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <img src={Manasheal} style={{ height: '60px', width: '60px' }} alt="Manasheal Logo" />
                  </motion.span>
                )}
              </AnimatePresence>
            </h1>
            <div className="bars" onClick={toggleSidebar}>
              <FaBars />
            </div>
            
          </div>
          
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    key={index}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}

           
          </section>
          {/* Translation button */}
          
            <div id="google_element"></div>
          
          
            
          
        </motion.div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Header = ({ isEditProfilePage }) => {
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                document.body.classList.add('shrink');
            } else {
                document.body.classList.remove('shrink');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigate = useNavigate();

    const handleLogout = () => {
        // Implement logout logic here
        console.log('User logged out');
        navigate('/login');
    };

    return (
        <div className="header">
            <div className="top_head">
                <div className="container">
                    <div className="row">
                        <div className="head_contact">
                            <ul>
                                <li>
                                    <img src="../images/icon04.png" alt="" />
                                    Sarkar shoss exclusive Natun Bazar turminal complex, PO : Maynaguri, Dist : Jalpaiguri, Pin : 753224.
                                </li>
                            </ul>
                        </div>
                        <div className="head_log_area ml-auto">
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src="../images/icon03.png" alt="" />
                                        dhrubadjs.mng@gmail.com
                                    </a>
                                </li>
                                <li style={{ marginRight: '120px', lineHeight: '24px', marginLeft: '-13px' }}>
                                    <a href="tel:7797813261" style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src="../images/icon02.jpg" alt="" style={{ marginRight: '9px', verticalAlign: 'middle', marginLeft: '-5px' }} />
                                        <span style={{ display: 'inline-block', marginTop: '2px', marginRight: '0px' }}>+91 7797813261</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle_head">
                <div className="container">
                    <div className="logo-search-container">
                        <div className="logo-container">
                            <span className="logo">
                                <a href="/"><img src="./images/logo1.png" alt="Logo" /></a>
                            </span>
                        </div>
                        <div className="search-container">
                            <div className="right_search">
                                <div className="left_search">
                                    <form>
                                        <input type="text" className="search_type mobill010" placeholder="Search for Products" />
                                        <button type="submit" value="" className="search_submit">
                                            <img src="../../images/search_icon.png" alt="Search" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-menu-container">
                        <div className="nav-menu">
                            <ul>
                                <li className="dropdown">
                                    <button className="dropbtn">All Categories <FontAwesomeIcon icon={faCaretDown} /></button>
                                    <div className="dropdown-content">
                                        <div className="dropdown-content-item">
                                            <a href="/search">Vegetable <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '140px' }} /></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Sub Category One</a></li>
                                                <li><a href="#">Abc Sub Category Here</a></li>
                                                <li><a href="#">Sub Category three</a></li>
                                                <li><a href="#">Dummy Sub Category name</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown-content-item">
                                            <a href="#">Fruits <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '170px' }} /></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Sub Category One 2</a></li>
                                                <li><a href="#">Abc Sub Category Here 2</a></li>
                                                <li><a href="#">Sub Category three 2</a></li>
                                                <li><a href="#">Dummy Sub Category name2</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown-content-item">
                                            <a href="#">Dairy products <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '110px' }} /></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Sub Category One</a></li>
                                                <li><a href="#">Abc Sub Category Here</a></li>
                                                <li><a href="#">Sub Category three</a></li>
                                                <li><a href="#">Dummy Sub Category name</a></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown-content-item">
                                            <a href="#">Organic products <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: '91px' }} /></a>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Sub Category One</a></li>
                                                <li><a href="#">Abc Sub Category Here</a></li>
                                                <li><a href="#">Sub Category three</a></li>
                                                <li><a href="#">Dummy Sub Category name</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li><button className="blue-button" onClick={() => window.location.href = "#"}>About Bazar Maynaguri</button></li>
                                <li><button className="blue-button" onClick={() => window.location.href = "#"}>B2B Information</button></li>
                                <li><button className="blue-button" onClick={() => window.location.href = "#"}>FAQ</button></li>
                                <li><button className="blue-button" onClick={() => window.location.href = "#"}>Contact Us</button></li>
                                <li><button className="blue-button" onClick={() => window.location.href = "#"}>Enquiry Us</button></li>
                                {!isEditProfilePage && (
                                  <li><button className="blue-button" onClick={() => window.location.href = "/signup"}>Register here</button></li>
                                )}
                                {isEditProfilePage ? (
                                  <li><button className="blue-button" onClick={handleLogout}>Logout</button></li>
                                ) : (
                                  <li><button className="blue-button" onClick={() => window.location.href = "/login"}>Login</button></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

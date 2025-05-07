import React, { useState } from "react";
import './Header.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import Logo from '../Images/Group 1410103674 1.png'

const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [search, setSearch] = useState(false);

    const handleSearch = () => setSearch(true);
    const handleSearchClose = () => setSearch(false);

    return (
        <>
            <header className="nav-header">
                <div className="nav-logo">
                    <div>
                        <button className="nav-menu" onClick={handleShow} >
                            <i class="fa fa-bars"></i>
                        </button>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <div className="offcanvas-menu">
                                    <ul>
                                        <li className="item"><Link to="/">Home</Link></li>
                                        <li className="item"><Link to="/Collection">Collections</Link></li>
                                        <li className="item"><a href="#Contact">Contact</a></li>
                                        <li className="item"><a href="#About">About Us</a></li>
                                    </ul>
                                </div>
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                    <div className="nav-logo-image">
                        <img src={Logo} />
                    </div>
                </div>
                <div className="nav-list">
                    <ul>
                        <li className="item"><Link to="/">Home</Link></li>
                        <li className="item"><Link to="/Collection">Collections</Link></li>
                        <li className="item"><a href="#Contact">Contact</a></li>
                        <li className="item"><a href="#About">About Us</a></li>
                    </ul>
                </div>
                <div className="nav-icons">
                    <Offcanvas show={search} onHide={handleSearchClose} placement="top">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title className="Offcanvas-title">Search the Products</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="Offcanvas-body">
                            <input className="navtop-search" type="text" placeholder="Search the Products ..." />
                            <button className="navtop-search-button">Search</button>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <div className="nav-search">
                        <button onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <button><i class="fa-solid fa-user"></i></button>
                    <button><i class="fa-solid fa-bag-shopping"></i></button>
                </div>
            </header>

        </>
    )
}
export default Header
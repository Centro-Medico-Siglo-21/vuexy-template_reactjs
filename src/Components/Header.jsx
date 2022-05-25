import React, {useState, useEffect} from 'react';
import {setCurrentMode} from '../Helpers/utils';

function Header() {
    useEffect(() => {
        setCurrentMode();
    });

    const darkMode = () => {
        if (document.documentElement.classList.contains('dark-layout')) {
            document.documentElement.classList.add('light-layout');
            document.documentElement.classList.remove('dark-layout');
            localStorage.setItem('currentMode', "light");
        } else {
            document.documentElement.classList.add('dark-layout');
            document.documentElement.classList.remove('light-layout');
            localStorage.setItem('currentMode', "dark");
        }
    }

    return (
        <>
            {/* BEGIN: Header */}
                <nav className="header-navbar navbar navbar-expand-lg align-items-center floating-nav navbar-shadow container-xxl navbar-light">
                    <div className="navbar-container d-flex content">
                        <div className="bookmark-wrapper d-flex align-items-center">
                            <ul className="nav navbar-nav d-xl-none">
                                <li className="nav-item"><a className="nav-link menu-toggle" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu ficon"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></a></li>
                            </ul>
                            <ul className="nav navbar-nav bookmark-icons">
                                <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-email.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Email" aria-label="Email"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail ficon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a></li>
                                <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-chat.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Chat" aria-label="Chat"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square ficon"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></a></li>
                                <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-calendar.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Calendar" aria-label="Calendar"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar ficon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></a></li>
                                <li className="nav-item d-none d-lg-block"><a className="nav-link" href="app-todo.html" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Todo" aria-label="Todo"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square ficon"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></a></li>
                            </ul>
                            <ul className="nav navbar-nav">
                                <li className="nav-item d-none d-lg-block"><a className="nav-link bookmark-star" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star ficon text-warning"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></a>
                                    <div className="bookmark-input search-input">
                                        <div className="bookmark-input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
                                        <input className="form-control input" type="text" placeholder="Bookmark" tabIndex="0" data-search="search"/>
                                        <ul className="search-list search-list-bookmark ps"><div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}><div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px", right: "0px"}}><div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "0px"}}></div></div></ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul className="nav navbar-nav align-items-center ms-auto">
                            <li className="nav-item dropdown dropdown-language"><a className="nav-link dropdown-toggle" id="dropdown-flag" href="/" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="flag-icon flag-icon-us"></i><span className="selected-language">English</span></a>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-flag"><a className="dropdown-item" href="/" data-language="en"><i className="flag-icon flag-icon-us"></i> English</a><a className="dropdown-item" href="/" data-language="fr"><i className="flag-icon flag-icon-fr"></i> French</a><a className="dropdown-item" href="/" data-language="de"><i className="flag-icon flag-icon-de"></i> German</a><a className="dropdown-item" href="/" data-language="pt"><i className="flag-icon flag-icon-pt"></i> Portuguese</a></div>
                            </li>
                            <li className="nav-item d-none d-lg-block">
                                <a className="nav-link nav-link-style" href="#!" onClick={darkMode}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon ficon">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="nav-item nav-search"><a className="nav-link nav-link-search"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search ficon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></a>
                                <div className="search-input">
                                    <div className="search-input-icon"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
                                    <input className="form-control input" type="text" placeholder="Explore Vuexy..." tabIndex="-1" data-search="search"/>
                                    <div className="search-input-close"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                                    <ul className="search-list search-list-main ps"><div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}><div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px", right: "0px"}}><div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "0px"}}></div></div></ul>
                                </div>
                            </li>
                            <li className="nav-item dropdown dropdown-cart me-25"><a className="nav-link" href="/" data-bs-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart ficon">
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                                <span className="badge rounded-pill bg-primary badge-up cart-item-count">6</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-end">
                                    <li className="dropdown-menu-header">
                                        <div className="dropdown-header d-flex">
                                            <h4 className="notification-title mb-0 me-auto">My Cart</h4>
                                            <div className="badge rounded-pill badge-light-primary">4 Items</div>
                                        </div>
                                    </li>
                                    <li className="scrollable-container media-list ps">
                                        <div className="list-item align-items-center"><img className="d-block rounded me-1" src="/styles/app-assets/images/pages/eCommerce/1.png" alt="donuts" width="62"/>
                                            <div className="list-item-body flex-grow-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x ficon cart-item-remove"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                <div className="media-heading">
                                                    <h6 className="cart-item-title"><a className="text-body" href="app-ecommerce-details.html"> Apple watch 5</a></h6><small className="cart-item-by">By Apple</small>
                                                </div>
                                                <div className="cart-item-qty">
                                                    <div className="input-group bootstrap-touchspin">
                                                        <span className="input-group-btn bootstrap-touchspin-injected">
                                                            <button className="btn btn-primary bootstrap-touchspin-down" type="button">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
                                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                </svg>
                                                            </button>
                                                        </span>
                                                        <input className="touchspin-cart form-control" type="number" defaultValue="1"/>
                                                        <span className="input-group-btn bootstrap-touchspin-injected">
                                                            <button className="btn btn-primary bootstrap-touchspin-up" type="button">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                                </svg>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>
                                                <h5 className="cart-item-price">$374.90</h5>
                                            </div>
                                        </div>
                                        <div className="list-item align-items-center"><img className="d-block rounded me-1" src="/styles/app-assets/images/pages/eCommerce/7.png" alt="donuts" width="62"/>
                                            <div className="list-item-body flex-grow-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x ficon cart-item-remove"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                <div className="media-heading">
                                                    <h6 className="cart-item-title"><a className="text-body" href="app-ecommerce-details.html"> Google Home Mini</a></h6><small className="cart-item-by">By Google</small>
                                                </div>
                                                <div className="cart-item-qty">
                                                    <div className="input-group bootstrap-touchspin">
                                                        <span className="input-group-btn bootstrap-touchspin-injected"><button className="btn btn-primary bootstrap-touchspin-down" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button></span><input className="touchspin-cart form-control" type="number" defaultValue="3"/><span className="input-group-btn bootstrap-touchspin-injected"><button className="btn btn-primary bootstrap-touchspin-up" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button></span>
                                                    </div>
                                                </div>
                                                <h5 className="cart-item-price">$129.40</h5>
                                            </div>
                                        </div>
                                        <div className="list-item align-items-center"><img className="d-block rounded me-1" src="/styles/app-assets/images/pages/eCommerce/2.png" alt="donuts" width="62"/>
                                            <div className="list-item-body flex-grow-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x ficon cart-item-remove"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                <div className="media-heading">
                                                    <h6 className="cart-item-title"><a className="text-body" href="app-ecommerce-details.html"> iPhone 11 Pro</a></h6><small className="cart-item-by">By Apple</small>
                                                </div>
                                                <div className="cart-item-qty">
                                                    <div className="input-group bootstrap-touchspin">
                                                        <span className="input-group-btn bootstrap-touchspin-injected"><button className="btn btn-primary bootstrap-touchspin-down" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button></span><input className="touchspin-cart form-control" type="number" defaultValue="2"/><span className="input-group-btn bootstrap-touchspin-injected"><button className="btn btn-primary bootstrap-touchspin-up" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button></span>
                                                    </div>
                                                </div>
                                                <h5 className="cart-item-price">$699.00</h5>
                                            </div>
                                        </div>
                                        <div className="list-item align-items-center"><img className="d-block rounded me-1" src="/styles/app-assets/images/pages/eCommerce/3.png" alt="donuts" width="62"/>
                                            <div className="list-item-body flex-grow-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x ficon cart-item-remove"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                <div className="media-heading">
                                                    <h6 className="cart-item-title"><a className="text-body" href="app-ecommerce-details.html"> iMac Pro</a></h6><small className="cart-item-by">By Apple</small>
                                                </div>
                                                <div className="cart-item-qty">
                                                    <div className="input-group bootstrap-touchspin">
                                                        <span className="input-group-btn bootstrap-touchspin-injected"><button className="btn btn-primary bootstrap-touchspin-down" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button></span><input className="touchspin-cart form-control" type="number" defaultValue="1"/><span className="input-group-btn bootstrap-touchspin-injected"><button className="btn btn-primary bootstrap-touchspin-up" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button></span>
                                                    </div>
                                                </div>
                                                <h5 className="cart-item-price">$4,999.00</h5>
                                            </div>
                                        </div>
                                        <div className="list-item align-items-center"><img className="d-block rounded me-1" src="/styles/app-assets/images/pages/eCommerce/5.png" alt="donuts" width="62"/>
                                            <div className="list-item-body flex-grow-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x ficon cart-item-remove"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                <div className="media-heading">
                                                    <h6 className="cart-item-title"><a className="text-body" href="app-ecommerce-details.html"> MacBook Pro</a></h6><small className="cart-item-by">By Apple</small>
                                                </div>
                                                <div className="cart-item-qty">
                                                    <div className="input-group bootstrap-touchspin">
                                                        <span className="input-group-btn bootstrap-touchspin-injected"><button className="btn btn-primary bootstrap-touchspin-down" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button></span><input className="touchspin-cart form-control" type="number" defaultValue="1"/><span className="input-group-btn bootstrap-touchspin-injected"><button className="btn btn-primary bootstrap-touchspin-up" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button></span>
                                                    </div>
                                                </div>
                                                <h5 className="cart-item-price">$2,999.00</h5>
                                            </div>
                                        </div>
                                    <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}><div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px", right: "0px"}}><div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "0px"}}></div></div></li>
                                    <li className="dropdown-menu-footer">
                                        <div className="d-flex justify-content-between mb-1">
                                            <h6 className="fw-bolder mb-0">Total:</h6>
                                            <h6 className="text-primary fw-bolder mb-0">$10,999.00</h6>
                                        </div><a className="btn btn-primary w-100 waves-effect waves-float waves-light" href="app-ecommerce-checkout.html">Checkout</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown dropdown-notification me-25"><a className="nav-link" href="/" data-bs-toggle="dropdown"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell ficon"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg><span className="badge rounded-pill bg-danger badge-up">5</span></a>
                                <ul className="dropdown-menu dropdown-menu-media dropdown-menu-end">
                                    <li className="dropdown-menu-header">
                                        <div className="dropdown-header d-flex">
                                            <h4 className="notification-title mb-0 me-auto">Notifications</h4>
                                            <div className="badge rounded-pill badge-light-primary">6 New</div>
                                        </div>
                                    </li>
                                    <li className="scrollable-container media-list ps"><a className="d-flex" href="/">
                                            <div className="list-item d-flex align-items-start">
                                                <div className="me-1">
                                                    <div className="avatar"><img src="/styles/app-assets/images/portrait/small/avatar-s-15.jpg" alt="avatar" width="32" height="32"/></div>
                                                </div>
                                                <div className="list-item-body flex-grow-1">
                                                    <p className="media-heading"><span className="fw-bolder">Congratulation Sam 🎉</span>winner!</p><small className="notification-text"> Won the monthly best seller badge.</small>
                                                </div>
                                            </div>
                                        </a><a className="d-flex" href="/">
                                            <div className="list-item d-flex align-items-start">
                                                <div className="me-1">
                                                    <div className="avatar"><img src="/styles/app-assets/images/portrait/small/avatar-s-3.jpg" alt="avatar" width="32" height="32"/></div>
                                                </div>
                                                <div className="list-item-body flex-grow-1">
                                                    <p className="media-heading"><span className="fw-bolder">New message</span>&nbsp;received</p><small className="notification-text"> You have 10 unread messages</small>
                                                </div>
                                            </div>
                                        </a><a className="d-flex" href="/">
                                            <div className="list-item d-flex align-items-start">
                                                <div className="me-1">
                                                    <div className="avatar bg-light-danger">
                                                        <div className="avatar-content">MD</div>
                                                    </div>
                                                </div>
                                                <div className="list-item-body flex-grow-1">
                                                    <p className="media-heading"><span className="fw-bolder">Revised Order 👋</span>&nbsp;checkout</p><small className="notification-text"> MD Inc. order updated</small>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="list-item d-flex align-items-center">
                                            <h6 className="fw-bolder me-auto mb-0">System Notifications</h6>
                                            <div className="form-check form-check-primary form-switch">
                                                <input className="form-check-input" id="systemNotification" type="checkbox" defaultChecked=""/>
                                                <label className="form-check-label" htmlFor="systemNotification"></label>
                                            </div>
                                        </div><a className="d-flex" href="/">
                                            <div className="list-item d-flex align-items-start">
                                                <div className="me-1">
                                                    <div className="avatar bg-light-danger">
                                                        <div className="avatar-content"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x avatar-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                                                    </div>
                                                </div>
                                                <div className="list-item-body flex-grow-1">
                                                    <p className="media-heading"><span className="fw-bolder">Server down</span>&nbsp;registered</p><small className="notification-text"> USA Server is down due to high CPU usage</small>
                                                </div>
                                            </div>
                                        </a><a className="d-flex" href="/">
                                            <div className="list-item d-flex align-items-start">
                                                <div className="me-1">
                                                    <div className="avatar bg-light-success">
                                                        <div className="avatar-content"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check avatar-icon"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                                                    </div>
                                                </div>
                                                <div className="list-item-body flex-grow-1">
                                                    <p className="media-heading"><span className="fw-bolder">Sales report</span>&nbsp;generated</p><small className="notification-text"> Last month sales report generated</small>
                                                </div>
                                            </div>
                                        </a><a className="d-flex" href="/">
                                            <div className="list-item d-flex align-items-start">
                                                <div className="me-1">
                                                    <div className="avatar bg-light-warning">
                                                        <div className="avatar-content"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-triangle avatar-icon"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg></div>
                                                    </div>
                                                </div>
                                                <div className="list-item-body flex-grow-1">
                                                    <p className="media-heading"><span className="fw-bolder">High memory</span>&nbsp;usage</p><small className="notification-text"> BLR Server using high memory</small>
                                                </div>
                                            </div>
                                        </a>
                                    <div className="ps__rail-x" style={{left: "0px", bottom: "0px"}}><div className="ps__thumb-x" tabIndex="0" style={{left: "0px", width: "0px"}}></div></div><div className="ps__rail-y" style={{top: "0px", right: "0px"}}><div className="ps__thumb-y" tabIndex="0" style={{top: "0px", height: "0px"}}></div></div></li>
                                    <li className="dropdown-menu-footer"><a className="btn btn-primary w-100 waves-effect waves-float waves-light" href="/">Read all notifications</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown dropdown-user"><a className="nav-link dropdown-toggle dropdown-user-link" id="dropdown-user" href="/" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="user-nav d-sm-flex d-none"><span className="user-name fw-bolder">John Doe</span><span className="user-status">Admin</span></div><span className="avatar"><img className="round" src="/styles/app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="40" width="40"/><span className="avatar-status-online"></span></span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdown-user"><a className="dropdown-item" href="page-profile.html"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user me-50"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile</a><a className="dropdown-item" href="app-email.html"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail me-50"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Inbox</a><a className="dropdown-item" href="app-todo.html"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check-square me-50"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg> Task</a><a className="dropdown-item" href="app-chat.html"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square me-50"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> Chats</a>
                                    <div className="dropdown-divider"></div><a className="dropdown-item" href="page-account-settings-account.html"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings me-50"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Settings</a><a className="dropdown-item" href="page-pricing.html"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-credit-card me-50"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg> Pricing</a><a className="dropdown-item" href="page-faq.html"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle me-50"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> FAQ</a><a className="dropdown-item" href="auth-login-cover.html"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-power me-50"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg> Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            {/* END: Header */}
        </>
    )
}

export default Header
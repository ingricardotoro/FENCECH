import React from 'react';
import Image from 'next/image';
import headerLogo from "../../../public/assets/images/logo/logo_fencech.jpg";
import Link from 'next/link';
import SidebarMenu from '../sidebar/SidebarMenu';
import CommonHeaderMainMenu from './component/MainMenu';
import useGlobalContext from '@/hooks/useContexts';

const HeaderOne = () => {
    const { scrollDirection, toggleSidebarMenu } = useGlobalContext();
    return (
        <>
            {/* -- Header area start -- */}
            <header>
           
                <div className="bd-header-top style-three">
                        <div className="bd-header-top-left">
                            <ul>
                                <li><Link href="tel:+50222222222"><span><i className="fa-solid fa-phone-volume"></i></span>(504) 2222-2222</Link></li>
                                <li><Link href="mailto:info@fencech.hn"><span><i
                                    className="fa-sharp fa-light fa-envelope"></i></span>info@fencech.hn</Link></li>
                            </ul>
                        </div>
                        <div className="bd-header-top-right text-md-end">
                            <Link href="#"><span><i className="fa-sharp fa-regular fa-location-dot"></i></span>Tegucucigalpa, Honduras</Link>
                        </div>
                    </div>
                <div className={`bd-header-area header-style-one demo-header ${scrollDirection === "down" ? "bd-sticky" : ""}`} id="header-sticky">
                    
                    <div className="bd-header-inner">
                        <div className="bd-header-left">
                            <div className="bd-header-logo">
                                <Link href="/">
                                    <Image style={{ width: "100%", height: "auto" }} src={headerLogo} alt='logo' />
                                </Link>
                            </div>
                        </div>
                        <div className="bd-header-menu">
                            <nav className="main-menu bd-mobile-menu-active d-none d-xl-block">
                                <CommonHeaderMainMenu />
                            </nav>
                        </div>
                        <div className="bd-header-right">
                            <div className="bd-header-sign-btn">
                                <Link className="bd-btn btn-outline-border-primary" href="/contacto" target="_blank">
                                    <span data-text="Conctactar">
                                        Conctactar
                                    </span>
                                </Link>
                            </div>
                            <div className="bd-header-hamburger">
                                <div className="sidebar-toggle">
                                    <Link onClick={toggleSidebarMenu} className="bar-icon" href="#">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
            </header>
            {/* -- Header area end -- */}
            {/* sidebar mobile menu */}
            <SidebarMenu />
        </>
    );
};

export default HeaderOne;
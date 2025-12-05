"use client"
import Link from 'next/link';
import React from 'react';
import homeBgImg from "../../../public/assets/images/bg/home-one-bg.webp";
import shape1 from '../../../public/assets/images/banner/banner-1/shape-1.webp';
import shape2 from '../../../public/assets/images/banner/banner-1/shape-2.webp';
import shape3 from '../../../public/assets/images/banner/banner-1/shape-3.webp';
import shape4 from '../../../public/assets/images/banner/banner-1/shape-4.webp';
import shape5 from '../../../public/assets/images/banner/banner-1/shape-5.webp';
import badgeImgTwo from '../../../public/assets/images/shape/badge-img.webp';
import StarGroupImg from '../../../public/assets/images/shape/star-group.webp';
import LogoVertical from '../../../public/assets/images/logo/logo_vertical.png';

import Image from 'next/image';
import { useVideoModal } from '@/contextApi/VideoProvider';

const BannerSectionOne = () => {
    const { playVideo } = useVideoModal();
    return (
        <>
            {/* -- banner area start -- */}
            <section className="bd-banner-area bd-banner-one p-relative fix image-bg" style={{ backgroundImage: `url(${homeBgImg.src})` }}>
                <div className="container">
                    <div className="bd-banner-shape">
                        <div className="shape-1">
                            <Image src={shape1} style={{ width: "100%", height: "auto" }} priority alt="shape" />
                        </div>
                        <div className="shape-2">
                            <Image src={shape2} style={{ width: "100%", height: "auto" }} priority alt="shape" />
                        </div>
                        <div className="shape-3">
                            <Image src={shape3} style={{ width: "100%", height: "auto" }} priority alt="shape" />
                        </div>
                        <div className="shape-4">
                            <Image src={shape4} style={{ width: "100%", height: "auto" }} priority alt="shape" />
                        </div>
                        <div className="shape-5">
                            <Image src={shape5} style={{ width: "100%", height: "auto" }} priority alt="shape" />
                        </div>
                    </div>
                    <div className="bd-banner-one-row-wrap">
                        <div className="row gy-30 align-items-center justify-content-end">
                            <div className="col-xxl-5 col-xl-6 col-lg-12">
                                <div className="bd-banner-one-content">
                                    <span className="bd-banner-subtitle">Bienvenido a FENCECH</span>
                                    <h1 className="bd-banner-title small mb-20">Apoyando a <span className="bd-title-underline text-secondary">
                                        70+
                                        <svg width="138" height="8" viewBox="0 0 138 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 7C28.2975 2.83975 94.8839 -1.83253 137 3.15976" stroke="#FFAF00"
                                                strokeWidth="2" />
                                        </svg>
                                    </span> Centros Educativos Cátolicos en Honduras</h1>
                                    <p className="bd-banner-description">Fundada el 11 de abril de 1949, como una institución sin fines de lucro, al servicio de la Educación Católica de Honduras.</p>
                                    <div className="bd-banner-btn d-flex-items flex-wrap gap-30">
                                        <Link className="bd-btn btn-outline-border-primary" href="#" onClick={() => playVideo("HKk4oLIzhhM", "youtube")}>FENCECH</Link>
                                        <Link className="bd-video-btn secondary popup-video" href="#" type='button' onClick={() => playVideo("HKk4oLIzhhM", "youtube")}>
                                            <span className="icon"><i className="fa-solid fa-play"></i></span>
                                            Ver Video
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-6 col-lg-12">
                                <div className="bd-banner-thumb-wrapper position-relative">
                                    <div className="bd-banner-thumb">
                                        <Image src={LogoVertical} style={{ width: "auto", height: "auto" }} priority alt="image" />
                                    </div>
                                    <div className="bd-banner-tag-wrapper">
                                        {/* <div className="bd-banner-tag-one">
                                            <div className="shape"><Image src={dotShape} style={{ width: "100%", height: "auto" }} priority alt="shape" /></div>
                                            <div className="inner">
                                                <div className="icon">
                                                    <Image src={badgeImg} style={{ width: "100%", height: "auto" }} priority alt="shape" />
                                                </div>
                                                <div className="content">
                                                    <div className="title">100%</div>
                                                    <div className="subtitle">
                                                        Satisfied Learner
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="bd-banner-tag-two">
                                            <div className="inner">
                                                <div className="icon">
                                                    <Image src={badgeImgTwo} style={{ width: "100%", height: "auto" }} priority alt="shape" />
                                                    <Image src={StarGroupImg} style={{ width: "100%", height: "auto" }} priority alt="shape" />
                                                </div>
                                                <div className="content">
                                                    <div className="title">16,500+</div>
                                                    <div className="subtitle">
                                                        Estudiantes <br /> Católicos
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -- banner area end -- */}
        </>
    );
};

export default BannerSectionOne;
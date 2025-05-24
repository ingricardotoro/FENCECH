"use client"

import { finesData } from '@/data/categories';
import Link from 'next/link';
import React from 'react';

const CourseCatagory = () => {
    return (
        <>
            {/* -- category area start -- */}
            <section className="bd-category-area section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="bd-section-wrapper section-title-space text-center">
                                <h2 className="bd-section-title">
                                   Nuestros <span className="down-mark-line">Fines</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30">
                        {finesData.slice(0, 8).map((category) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={category.id}>
                                <Link href="/courses" className="bd-category-wrapper style-one wow bdFadeInUp" data-wow-delay=".4s">
                                    <div className="bd-category-item">
                                        <span className="bd-category-icon">
                                            <category.icon />
                                        </span>
                                        <div className="bd-category-content">
                                            <h6 className="bd-category-title">{category.title}</h6>
                                            <span className="bd-category-total">{category.totalCourses}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* -- category area end -- */}
        </>
    );
};

export default CourseCatagory;
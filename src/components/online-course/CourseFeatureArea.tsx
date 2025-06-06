import React from 'react';
import VideoCourseSvg from '@/svg/VideoCourseSvg';
import LearnCourseSvg from '@/svg/LearnCourseSvg';
import DeviceSvg from '@/svg/DeviceSvg';

const CourseFeatureArea = () => {
    return (
        <>
            {/* -- feature area start -- */}
            <div className="bd-feature-area theme-bg pt-40 pb-40 bd-noise-bg">
                <div className="container">
                    <div className="row gy-30 justify-content-between align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="bd-feature-wrapper style-one wow bdFadeInUp">
                                <div className="bd-feature-item">
                                    <span className="icon">
                                        <VideoCourseSvg />
                                    </span>
                                    <p className="description">Región Norte - Occidente, con mas de 16 Instituciones</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="bd-feature-wrapper style-one wow bdFadeInUp">
                                <div className="bd-feature-item">
                                    <span className="icon">
                                        <LearnCourseSvg />
                                    </span>
                                    <p className="description">Región Centro - Sur, con mas de 13 Instituciones</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="bd-feature-wrapper style-one wow bdFadeInUp">
                                <div className="bd-feature-item">
                                    <span className="icon">
                                        <DeviceSvg />
                                    </span>
                                    <p className="description">Región Comayagua - La PAZ, con mas de 10 Instituciones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* -- feature area end -- */}
        </>
    );
};

export default CourseFeatureArea;
import React from 'react';
import BreadcrumbsTwo from '@/components/common/Breadcrumb/BreadcrumbsTwo';
import FencechHistoryArea from './FencechHistoryArea';
import FencechMissionVisionArea from './FencechMissionVisionArea';
import AboutCtaArea from '@/components/common/about-cta/AboutCtaArea';

const QuienesSomosMain = () => {
    return (
        <>
            <BreadcrumbsTwo breadcrumbTwoTitle='Quiénes Somos' />
            <FencechHistoryArea />
            <FencechMissionVisionArea />
            <AboutCtaArea />
        </>
    );
};

export default QuienesSomosMain;
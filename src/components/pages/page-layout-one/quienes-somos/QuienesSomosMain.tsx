import React from 'react';
import FencechHistoryArea from './FencechHistoryArea';
import FencechMissionVisionArea from './FencechMissionVisionArea';
import AboutCtaArea from '@/components/common/about-cta/AboutCtaArea';
import BreadcrumbNosotros from '@/components/common/Breadcrumb/BreadcrumbNosotros';

const QuienesSomosMain = () => {
    return (
        <>
            <BreadcrumbNosotros breadcrumbTwoTitle='Quiénes Somos' />
            <FencechHistoryArea />
            <FencechMissionVisionArea />
            <AboutCtaArea />
        </>
    );
};

export default QuienesSomosMain;
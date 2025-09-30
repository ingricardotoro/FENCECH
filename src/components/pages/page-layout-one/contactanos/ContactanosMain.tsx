import React from 'react';
import BreadcrumbsTwo from '@/components/common/Breadcrumb/BreadcrumbsTwo';
import FencechContactInfoArea from './FencechContactInfoArea';
import FencechContactForm from './FencechContactForm';
import AboutCtaArea from '@/components/common/about-cta/AboutCtaArea';

const ContactanosMain: React.FC = () => {
    return (
        <>
            {/* Breadcrumb */}
            <BreadcrumbsTwo breadcrumbTwoTitle='Contáctanos' />
            
            {/* Información de Contacto */}
            <FencechContactInfoArea />
            
            {/* Formulario de Contacto */}
            <FencechContactForm />
            
            {/* Call to Action */}
            <AboutCtaArea />
        </>
    );
};

export default ContactanosMain;
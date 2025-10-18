import SchoolGrid from '@/components/regiones/SchoolGrid';
import Wrapper from '@/layout/DefaultWrapper';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "RECENSUR - Región Centro Sur | FENCECH",
    description: "Institutos educativos de la Región Centro Sur (RECENSUR) afiliados a FENCECH. Información de centros educativos en San Pedro Sula, Cortés y zonas industriales.",
    keywords: "RECENSUR, educación Honduras, institutos centro sur, San Pedro Sula, Cortés, zona industrial, FENCECH",
};

const RECENSURPage = () => {
    return (
        <Wrapper>
            <main>
                <SchoolGrid 
                    region="RECENSUR" 
                    title="RECENSUR - Región Centro Sur"
                    description="Conoce los institutos educativos de la Región Centro Sur, ubicados en la zona industrial y el occidente del país, formando profesionales competentes para el desarrollo económico de Honduras."
                />
            </main>
        </Wrapper>
    );
};

export default RECENSURPage;
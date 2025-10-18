import SchoolGrid from '@/components/regiones/SchoolGrid';
import Wrapper from '@/layout/DefaultWrapper';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "RENOCC - Región Norte Occidental y Centro Occidental | FENCECH",
    description: "Institutos educativos de la Región Norte Occidental y Centro Occidental (RENOCC) afiliados a FENCECH. Centros educativos en la costa norte y zonas fronterizas.",
    keywords: "RENOCC, educación Honduras, institutos norte occidental, costa caribeña, La Ceiba, Copán, frontera occidental, FENCECH",
};

const RENOCCPage = () => {
    return (
        <Wrapper>
            <main>
                <SchoolGrid 
                    region="RENOCC" 
                    title="RENOCC - Región Norte Occidental y Centro Occidental"
                    description="Explora los institutos educativos de la Región Norte Occidental y Centro Occidental, situados en la hermosa costa norte y las zonas fronterizas occidentales, promoviendo la educación multicultural y el desarrollo turístico."
                />
            </main>
        </Wrapper>
    );
};

export default RENOCCPage;
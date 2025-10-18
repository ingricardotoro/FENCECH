import SchoolGrid from '@/components/regiones/SchoolGrid';
import Wrapper from '@/layout/DefaultWrapper';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "RECOP - Región Centro Oriental y Pacífico | FENCECH",
    description: "Institutos educativos de la Región Centro Oriental y Pacífico (RECOP) afiliados a FENCECH. Encuentra información de contacto, ubicación y servicios educativos.",
    keywords: "RECOP, educación Honduras, institutos centro oriental, pacífico sur, FENCECH, Tegucigalpa, Comayagua, Choluteca",
};

const RECOPPage = () => {
    return (
        <Wrapper>
            <main>
                <SchoolGrid 
                    region="RECOP" 
                    description="Descubre los institutos educativos de excelencia que forman parte de la Región Centro Oriental y Pacífico, comprometidos con la educación integral en las zonas centrales y del pacífico sur de Honduras."
                />
            </main>
        </Wrapper>
    );
};

export default RECOPPage;
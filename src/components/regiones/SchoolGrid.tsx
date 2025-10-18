"use client"
import React from 'react';
//import BreadcrumbsTwo from '@/components/common/Breadcrumb/BreadcrumbsTwo';
import SchoolCard from '@/components/common/schools-card/SchoolCard';
import { School, getSchoolsByRegion } from '@/data/schools/schools-data';

interface SchoolGridProps {
    region: 'RECOP' | 'RECENSUR' | 'RENOCC';
    description?: string;
}

const SchoolGrid: React.FC<SchoolGridProps> = ({ region, description }) => {
    const schools: School[] = getSchoolsByRegion(region);
    
    const getRegionFullName = (region: string) => {
        switch (region) {
            case 'RECOP':
                return 'Región Centro Oriental y Pacífico';
            case 'RECENSUR':
                return 'Región Centro Sur';
            case 'RENOCC':
                return 'Región Norte Occidental y Centro Occidental';
            default:
                return region;
        }
    };

    const getRegionDescription = (region: string) => {
        switch (region) {
            case 'RECOP':
                return 'Institutos educativos que forman parte de la Región Centro Oriental y Pacífico, abarcando las zonas centrales y del pacífico sur de Honduras.';
            case 'RECENSUR':
                return 'Centros educativos de la Región Centro Sur, incluyendo la zona industrial y el occidente del país.';
            case 'RENOCC':
                return 'Instituciones de la Región Norte Occidental y Centro Occidental, cubriendo la costa norte y las zonas fronterizas occidentales.';
            default:
                return 'Institutos educativos afiliados a FENCECH en esta región.';
        }
    };

    return (
        <>
            {/* <BreadcrumbsTwo breadcrumbTwoTitle={title} /> */}
            
            {/* School Grid Area */}
            <section className="bd-school-grid-area section-space">
                <div className="container">
                    {/* Header Section */}
                    <div className="row justify-content-center mb-60">
                        <div className="col-xl-8 col-lg-10">
                            <div className="bd-section-title-wrapper text-center">
                                <h2 className="bd-section-title mb-25">
                                    {getRegionFullName(region)}
                                </h2>
                                <p className="bd-section-des mb-0">
                                    {description || getRegionDescription(region)}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Schools Count */}
                    <div className="row g-30 align-items-center justify-content-between mb-40">
                        <div className="col-xl-6 col-lg-6 col-md-8 col-12">
                            <div className="bd-top-sorting-left">
                                <h6 className="bd-sorting-item-found">
                                    Encontramos <span className="theme-color">{schools.length}</span> institutos disponibles en {region}
                                </h6>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-4 col-12">
                            <div className="bd-region-badge text-lg-end">
                                <span className="region-indicator">
                                    <i className="fa-solid fa-map-marker-alt me-2"></i>
                                    Región {region}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Schools Grid */}
                    {schools.length > 0 ? (
                        <div className="row g-30">
                            {schools.map((school) => (
                                <div className="col-xl-4 col-lg-6 col-md-6" key={school.id}>
                                    <SchoolCard school={school} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div className="bd-no-schools-found text-center py-80">
                                    <div className="no-schools-icon mb-30">
                                        <i className="fa-solid fa-school" style={{ fontSize: '4rem', color: '#ccc' }}></i>
                                    </div>
                                    <h4 className="mb-20">No se encontraron institutos</h4>
                                    <p className="text-muted">
                                        Actualmente no hay institutos registrados en la región {region}. 
                                        Por favor, revisa otras regiones o contacta con FENCECH para más información.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Load More Button - Solo si hay muchos institutos */}
                    {schools.length > 12 && (
                        <div className="bd-school-more-btn d-flex justify-content-center mt-50">
                            <button className="bd-btn btn-outline-border-primary">
                                Cargar Más <span className="right-icon"><i className="fa-duotone fa-spinner"></i></span>
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default SchoolGrid;
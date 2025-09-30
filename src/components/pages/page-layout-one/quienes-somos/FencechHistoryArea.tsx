import React from 'react';
import Image from 'next/image';
import { fencechHistoryData, fencechInstitutionalInfo } from '@/data/fencech-data';
import historyBgImg from '../../../../../public/assets/images/about/about-modern-schooling.webp';

const FencechHistoryArea = () => {
    return (
        <>
            <section className="bd-history-area section-space">
                <div className="container">
                    {/* Header Section */}
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="bd-section-title-wrapper section-title-space text-center">
                                <span className="bd-section-subtitle">{fencechHistoryData.subtitle}</span>
                                <h2 className="bd-section-title mb-20">{fencechHistoryData.title}</h2>
                                <p className="bd-section-paragraph">{fencechHistoryData.description}</p>
                            </div>
                        </div>
                    </div>

                    {/* Statistics */}
                    <div className="row gy-30 justify-content-center section-title-space">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="bd-counter-box text-center">
                                <div className="bd-counter-content">
                                    <h2 className="bd-counter-number">{fencechInstitutionalInfo.foundedYear}</h2>
                                    <p className="bd-counter-text">Año de Fundación</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="bd-counter-box text-center">
                                <div className="bd-counter-content">
                                    <h2 className="bd-counter-number">{fencechInstitutionalInfo.membersCount}</h2>
                                    <p className="bd-counter-text">Centros Afiliados</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="bd-counter-box text-center">
                                <div className="bd-counter-content">
                                    <h2 className="bd-counter-number">{fencechInstitutionalInfo.studentsServed}</h2>
                                    <p className="bd-counter-text">Estudiantes Beneficiados</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="bd-counter-box text-center">
                                <div className="bd-counter-content">
                                    <h2 className="bd-counter-number">{fencechInstitutionalInfo.regions}</h2>
                                    <p className="bd-counter-text">Presencia Nacional</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="row">
                        <div className="col-12">
                            <div className="bd-timeline-wrapper">
                                <div className="bd-timeline-inner">
                                    {fencechHistoryData.timeline.map((item, index) => (
                                        <div key={index} className={`bd-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                            <div className="bd-timeline-content">
                                                <div className="bd-timeline-year">
                                                    <span>{item.year}</span>
                                                </div>
                                                <div className="bd-timeline-info">
                                                    <h4 className="bd-timeline-title">{item.title}</h4>
                                                    <p className="bd-timeline-desc">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission Statement */}
                    <div className="row gy-30 align-items-center justify-content-between section-space-top">
                        <div className="col-xl-6 col-lg-6">
                            <div className="bd-history-content">
                                <h3 className="bd-history-title mb-20">Nuestro Compromiso</h3>
                                <p className="bd-history-desc mb-20">
                                    Desde nuestra fundación, FENCECH ha mantenido un compromiso inquebrantable con la excelencia educativa y la formación integral de las personas, basada en los valores cristianos y el magisterio de la Iglesia Católica.
                                </p>
                                <p className="bd-history-desc">
                                    Continuamos trabajando para fortalecer la educación católica en Honduras, adaptándonos a los desafíos contemporáneos mientras preservamos nuestra identidad y misión evangelizadora.
                                </p>
                                <div className="bd-history-motto mt-30">
                                    <h5 className="text-primary">&ldquo;{fencechInstitutionalInfo.motto}&rdquo;</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="bd-history-thumb">
                                <Image 
                                    src={historyBgImg} 
                                    style={{ width: '100%', height: 'auto' }} 
                                    alt="FENCECH Historia" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FencechHistoryArea;
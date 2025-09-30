import React from 'react';
import { fencechContactData, fencechContactInfo } from '@/data/fencech-data';

const FencechContactInfoArea = () => {
    return (
        <section className="bd-contact-address-area section-space primary-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="bd-section-title-wrapper section-title-space text-center">
                                <span className="bd-section-subtitle">Información de Contacto</span>
                                <h2 className="bd-section-title mb-20">Contáctanos</h2>
                                <p className="bd-section-paragraph">
                                    Estamos aquí para ayudarte. No dudes en contactarnos para cualquier consulta sobre 
                                    la educación católica en Honduras.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30">
                        {fencechContactData.map((item) => (
                            <div key={item.title} className="col-xl-3 col-lg-6 col-md-6">
                                <div className="bd-contact-address-box">
                                    <div className="icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">{item.title}</h6>
                                        {item.details.map((detail) => (
                                            typeof detail === 'string' ? (
                                                <p key={`${item.title}-${detail}`}>{detail}</p>
                                            ) : (
                                                <p key={`${item.title}-${detail.text}`}>
                                                    <a href={detail.link} target="_blank" rel="noopener noreferrer">
                                                        {detail.text}
                                                    </a>
                                                </p>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mapa de ubicación */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="bd-contact-map">
                                <div className="row justify-content-center mb-30">
                                    <div className="col-xl-6">
                                        <div className="text-center">
                                            <h3 className="mb-20">Nuestra Ubicación</h3>
                                            <p className="mb-0">
                                                Visítanos en nuestras oficinas en Tegucigalpa, Honduras. 
                                                Estamos ubicados en una zona accesible de la capital.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <iframe
                                    src={fencechContactInfo.mapCoordinates.embedUrl}
                                    width="100%"
                                    height="400"
                                    style={{ border: '0', borderRadius: '8px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Ubicación de FENCECH"
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default FencechContactInfoArea;
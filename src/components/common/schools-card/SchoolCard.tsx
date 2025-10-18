import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { School } from '@/data/schools/schools-data';

interface SchoolCardProps {
    school: School;
}

const SchoolCard: React.FC<SchoolCardProps> = ({ school }) => {
    return (
        <div className="bd-school-item mb-30">
            <div className="bd-school-item-wrapper">
                {/* Imagen del Instituto */}
                <div className="bd-school-thumb p-relative" style={{textAlign:'center'}}>
                    <Link href={school.website || '#'} className="flex justify-center">
                        <Image
                            src={school.image}
                            alt={school.name}
                            width={210}
                            height={226}
                            style={{ 
                                width: '210px',
                                height: '226px',
                                paddingTop: '20px',
                                objectFit: 'cover'
                            }}
                           
                        />
                    </Link>
                    <div className="bd-school-badge">
                        <span className="school-region-badge">{school.region}</span>
                    </div>
                </div>

                {/* Contenido del Instituto */}
                <div className="bd-school-content">
                    <div className="bd-school-content-top">
                        <div className="bd-school-meta">
                            <span className="school-location">
                                <i className="fa-solid fa-location-dot"></i>
                                {school.location}
                            </span>
                        </div>
                    </div>

                    <h5 className="bd-school-title">
                        <Link href={school.website || '#'}>
                            {school.name}
                        </Link>
                    </h5>

                    {school.description && (
                        <p className="bd-school-description">
                            {school.description}
                        </p>
                    )}

                    {/* Información de Contacto */}
                    <div className="bd-school-contact-info mb-20">
                        <div className="school-contact-item">
                            <i className="fa-solid fa-phone"></i>
                            <div className="contact-details">
                                <span className="phone-primary">{school.phone1} ----- {school.phone2 && (
                                    <span className="phone-secondary">{school.phone2}</span>
                                )}</span>
                                
                            </div>
                        </div>
                        
                        <div className="school-contact-item">
                            <i className="fa-solid fa-envelope"></i>
                            <div className="contact-details">
                                <a href={`mailto:${school.email}`} className="school-email">
                                    {school.email}
                                </a>
                            </div>
                        </div>

                        {school.website && (
                            <div className="school-contact-item">
                                <i className="fa-solid fa-globe"></i>
                                <div className="contact-details">
                                    <a 
                                        href={school.website} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="school-website"
                                    >
                                        Sitio Web
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Redes Sociales */}
                    <div className="bd-school-social">
                        <div className="school-social-list">
                            {school.socialNetworks.facebook && (
                                <a 
                                    href={school.socialNetworks.facebook} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link facebook"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            )}
                            {school.socialNetworks.instagram && (
                                <a 
                                    href={`https://instagram.com/${school.socialNetworks.instagram.replace('@', '')}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link instagram"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                            )}
                            {school.socialNetworks.twitter && (
                                <a 
                                    href={`https://twitter.com/${school.socialNetworks.twitter.replace('@', '')}`}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link twitter"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                            )}
                            {school.socialNetworks.youtube && (
                                <a 
                                    href={school.socialNetworks.youtube} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link youtube"
                                >
                                    <i className="fab fa-youtube"></i>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolCard;
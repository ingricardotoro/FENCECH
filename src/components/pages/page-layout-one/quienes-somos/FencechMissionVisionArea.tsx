import Image from 'next/image';
import React from 'react';
import gradientCircleShape from '../../../../../public/assets/images/shape/gradient-circle.webp';
import { fencechMissionVisionData } from '@/data/fencech-data';

const FencechMissionVisionArea = () => {
    return (
        <section className="bd-mission-vision section-space">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="bd-section-title-wrapper section-title-space text-center">
                                <span className="bd-section-subtitle">Nuestro Propósito</span>
                                <h2 className="bd-section-title mb-20">Misión, Visión y Valores de <span className="text-primary">FENCECH</span></h2>
                                <p className="bd-section-paragraph">
                                    Como federación comprometida con la educación católica en Honduras, nos guiamos por principios sólidos que orientan nuestra labor educativa y evangelizadora.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-30">
                        {
                            fencechMissionVisionData.length > 0 &&
                            fencechMissionVisionData.map((item) => (
                                <div key={item.id} className="col-xl-4 col-lg-4 col-md-12">
                                    <div className="bd-mission-vision-box">
                                        <div className="bd-mission-vision-shape">
                                            <Image 
                                                src={gradientCircleShape} 
                                                style={{ width: '100%', height: '100%' }} 
                                                alt="shape" 
                                            />
                                        </div>
                                        <span className="bd-mission-vision-icon">
                                            <Image 
                                                src={item.img} 
                                                style={{ width: '64px', height: '64px' }} 
                                                alt="icon" 
                                            />
                                        </span>
                                        <h3 className="bd-mission-vision-title">{item.title}</h3>
                                        <p className="bd-mission-vision-description">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
    );
};

export default FencechMissionVisionArea;
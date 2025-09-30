import Image from 'next/image';
import React from 'react';
import halfCircleShape from '../../../../public/assets/images/shape/half-circle-wave-1.webp';
import bookThreeShape from '../../../../public/assets/images/shape/book-3.webp';
import oneToThreeShape from '../../../../public/assets/images/shape/1-3-shape.webp';
import pencleShape from '../../../../public/assets/images/shape/pencle.webp';
import bulbShape from '../../../../public/assets/images/shape/shape-bulb.webp';
import eShape from '../../../../public/assets/images/shape/e-shape.webp';
import labShape from '../../../../public/assets/images/shape/shape-lab.webp';
import halfCircleWaveShapeTwo from '../../../../public/assets/images/shape/half-circle-wave-2.webp';

const AboutCtaArea = ({aboutWrapper}:{aboutWrapper?:boolean}) => {
    return (
        
        <section className={`bd-cta-area p-relative ${aboutWrapper ==true ? "section-space-top": ""}`}>
            <div className="bd-cta-wrapper style-two theme-bg p-relative section-space">
                <div className="container">
                    <div className="bd-cta-content-wrapper p-relative">
                        <div className="row justify-content-center">
                            <div className="col-xxl-8 col-xl-10 col-lg-10 col-md-12">
                                <div className="bd-cta-content text-center">
                                    <div className="bd-section-title-wrapper section-title-space text-center">
                                        <h2 className="bd-section-title text-white mb-25">
                                            &ldquo;Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él&rdquo;
                                        </h2>
                                        <p className="text-white mb-0" style={{ fontSize: '14px', fontStyle: 'italic' }}>
                                            Proverbios 22:6
                                        </p>
                                    </div>
                                    <div className="bd-cta-description mt-30">
                                        <p className="text-white mb-30" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                                            En FENCECH, nuestro compromiso trasciende lo académico. Guiados por principios cristianos, 
                                            nos dedicamos a formar no solo mentes brillantes, sino corazones íntegros que transformen 
                                            nuestra sociedad hondureña con amor, sabiduría y excelencia.
                                        </p>
                                        <p className="text-white mb-0" style={{ fontSize: '16px', fontWeight: '500' }}>
                                            <i className="fas fa-heart text-primary me-2"></i>
                                            Educando con propósito divino para Honduras
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bd-cta-shape-wrapper">
                        <div className="bd-cta-shape-1">
                            <Image src={halfCircleShape} alt="shape"/>
                        </div>
                        <div className="bd-cta-shape-2 d-none d-xl-block">
                            <Image src={bookThreeShape} alt="shape"/>
                        </div>
                        <div className="bd-cta-shape-3 d-none d-xl-block">
                            <Image src={oneToThreeShape} alt="shape"/>
                        </div>
                        <div className="bd-cta-shape-4 d-none d-xl-block">
                            <Image src={pencleShape} alt="shape"/>
                        </div>
                        <div className="bd-cta-shape-5 d-none d-xl-block">
                            <Image src={bulbShape} alt="shape"/>
                        </div>
                        <div className="bd-cta-shape-6 d-none d-xl-block">
                            <Image src={eShape} alt="shape"/>
                        </div>
                        <div className="bd-cta-shape-7 d-none d-xl-block">
                            <Image src={labShape} alt="shape"/>
                        </div>
                        <div className="bd-cta-shape-8">
                            <Image src={halfCircleWaveShapeTwo} alt="shape"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
};

export default AboutCtaArea;
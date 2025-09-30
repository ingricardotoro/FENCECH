"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import ErrorMsg from '../../../../form/auth/ErrorMsg';

interface FormData {
    fullName: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    privacyAccepted: boolean;
}

const FencechContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Datos del formulario:', data);
        // Aquí se implementaría el envío del formulario
        alert('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
        reset();
    };

    return (
        <section className="bd-contact-form-area pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="bd-section-title-wrapper mb-60 text-center">
                            <h2 className="bd-section-title mb-0">
                                Envíanos tu <span className="theme-color">Mensaje</span>
                            </h2>
                            <p className="bd-section-des">
                                ¿Tienes preguntas sobre nuestros programas educativos? Estamos aquí para ayudarte.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12">
                        <div className="bd-contact-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row gy-30">
                                    {/* Nombre Completo */}
                                    <div className="col-md-6">
                                        <div className="form-input-box">
                                            <div className="form-input-title">
                                                <label htmlFor="fullName">Nombre Completo<span>*</span></label>
                                            </div>
                                            <div className="form-input">
                                                <input
                                                    {...register("fullName", { 
                                                        required: "El nombre completo es requerido",
                                                        minLength: {
                                                            value: 2,
                                                            message: "El nombre debe tener al menos 2 caracteres"
                                                        }
                                                    })}
                                                    id="fullName"
                                                    type="text"
                                                    placeholder="Tu nombre completo"
                                                />
                                                <ErrorMsg error={errors?.fullName?.message} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Correo Electrónico */}
                                    <div className="col-md-6">
                                        <div className="form-input-box">
                                            <div className="form-input-title">
                                                <label htmlFor="email">Correo Electrónico<span>*</span></label>
                                            </div>
                                            <div className="form-input">
                                                <input
                                                    {...register("email", {
                                                        required: "El correo electrónico es requerido",
                                                        pattern: {
                                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                            message: "Formato de correo electrónico inválido",
                                                        },
                                                    })}
                                                    id="email"
                                                    type="email"
                                                    placeholder="tu@email.com"
                                                />
                                                <ErrorMsg error={errors?.email?.message} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Teléfono */}
                                    <div className="col-md-6">
                                        <div className="form-input-box">
                                            <div className="form-input-title">
                                                <label htmlFor="phone">Teléfono</label>
                                            </div>
                                            <div className="form-input">
                                                <input
                                                    {...register("phone", {
                                                        pattern: {
                                                            value: /^[+]?[0-9\s-()]{8,}$/,
                                                            message: "Formato de teléfono inválido"
                                                        }
                                                    })}
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="+504 1234-5678"
                                                />
                                                <ErrorMsg error={errors?.phone?.message} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Asunto */}
                                    <div className="col-md-6">
                                        <div className="form-input-box">
                                            <div className="form-input-title">
                                                <label htmlFor="subject">Asunto<span>*</span></label>
                                            </div>
                                            <div className="form-input">
                                                <select
                                                    {...register("subject", { required: "Selecciona un asunto" })}
                                                    id="subject"
                                                    className="form-select"
                                                >
                                                    <option value="">Selecciona un asunto</option>
                                                    <option value="informacion-general">Información General</option>
                                                    <option value="admisiones">Admisiones</option>
                                                    <option value="programas-academicos">Programas Académicos</option>
                                                    <option value="becas">Becas y Ayuda Financiera</option>
                                                    <option value="actividades-extracurriculares">Actividades Extracurriculares</option>
                                                    <option value="recursos-estudiantes">Recursos para Estudiantes</option>
                                                    <option value="padres-familia">Información para Padres</option>
                                                    <option value="empleo">Oportunidades de Empleo</option>
                                                    <option value="sugerencias">Sugerencias y Comentarios</option>
                                                    <option value="otro">Otro</option>
                                                </select>
                                                <ErrorMsg error={errors?.subject?.message} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mensaje */}
                                    <div className="col-12">
                                        <div className="form-input-box mb-15">
                                            <div className="form-input-title">
                                                <label htmlFor="message">Mensaje<span>*</span></label>
                                            </div>
                                            <div className="form-input">
                                                <textarea
                                                    {...register("message", { 
                                                        required: "El mensaje es requerido",
                                                        minLength: {
                                                            value: 10,
                                                            message: "El mensaje debe tener al menos 10 caracteres"
                                                        }
                                                    })}
                                                    id="message"
                                                    rows={6}
                                                    placeholder="Escribe tu mensaje aquí..."
                                                />
                                                <ErrorMsg error={errors?.message?.message} />
                                            </div>
                                        </div>

                                        {/* Checkbox de Privacidad */}
                                       {/*  <div className="checkbox-option mb-20">
                                            <input 
                                                {...register("privacyAccepted", { 
                                                    required: "Debes aceptar la política de privacidad" 
                                                })}
                                                id="privacy-check" 
                                                type="checkbox" 
                                            />
                                            <label htmlFor="privacy-check">
                                                Acepto la{" "}
                                                <span className="text-border-highlights">
                                                    <a href="/politica-privacidad" target="_blank" rel="noopener noreferrer">
                                                        política de privacidad
                                                    </a>
                                                    <span className="theme-black h-1px bottom-0"></span>
                                                </span>
                                                {" "}y el tratamiento de mis datos personales.
                                            </label>
                                            <ErrorMsg error={errors?.privacyAccepted?.message} />
                                        </div> */}
                                    </div>

                                    {/* Botón de Envío */}
                                    <div className="col-12">
                                        <div className="bd-contact-form-btn text-center">
                                            <button className="bd-btn btn-primary" type="submit">
                                                <span>Enviar Mensaje</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FencechContactForm;
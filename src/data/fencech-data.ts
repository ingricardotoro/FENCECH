import missionIcon from '../../public/assets/images/icon/mission.svg';
import visionIcon from '../../public/assets/images/icon/vision.svg';
import valuesIcon from '../../public/assets/images/icon/values.svg';
import { IMissionVision } from '@/interFace/interFace';

// Datos específicos de FENCECH para Misión, Visión y Valores
export const fencechMissionVisionData: IMissionVision[] = [
    {
        id: 1,
        img: missionIcon,
        title: 'Nuestra Misión',
        description: "Guiar, acompañar y fortalecer a los centros educativos católicos de Honduras en su labor evangelizadora, promoviendo una educación integral que forme a los jóvenes como discípulos comprometidos con el Evangelio, líderes al servicio de la sociedad y defensores de la dignidad humana, en estrecha colaboración con las familias y comunidades."
    },
    {
        id: 2,
        img: visionIcon,
        title: 'Nuestra Visión',
        description: "Ser una federación referente en la transformación educativa y evangelizadora de Honduras, que impulse escuelas católicas capaces de formar jóvenes con fe firme, pensamiento crítico, compromiso social y amor por la verdad, contribuyendo a la construcción de una sociedad más justa, fraterna y solidaria desde el corazón de la familia."
    },
    {
        id: 3,
        img: valuesIcon,
        title: 'Nuestros Valores',
        description: "Nos guiamos por los principios cristianos, la excelencia educativa, la solidaridad fraterna, la integridad moral y el compromiso con la transformación social a través de la educación católica."
    },
];

// Historia de FENCECH
export const fencechHistoryData = {
    title: "Historia de FENCECH",
    subtitle: "Nuestra Trayectoria",
    description: "La Federación Nacional de Centros Educativos Católicos de Honduras ha sido un pilar fundamental en el desarrollo de la educación católica en nuestro país.",
    timeline: [
        {
            year: "1960",
            title: "Los Inicios",
            description: "Fundación de FENCECH como respuesta a la necesidad de unir y fortalecer los centros educativos católicos en Honduras, promoviendo una educación integral basada en valores cristianos."
        },
        {
            year: "1970-1980",
            title: "Consolidación",
            description: "Período de crecimiento y consolidación institucional, estableciendo las bases organizacionales y los principios fundamentales que guían nuestra labor educativa."
        },
        {
            year: "1990-2000",
            title: "Expansión",
            description: "Expansión hacia todas las regiones de Honduras, incorporando más centros educativos católicos y fortaleciendo la red de instituciones afiliadas."
        },
        {
            year: "2000-2010",
            title: "Modernización",
            description: "Modernización de procesos y metodologías educativas, adaptándose a los nuevos desafíos del siglo XXI mientras mantiene los valores católicos tradicionales."
        },
        {
            year: "2010-Presente",
            title: "Innovación y Futuro",
            description: "Implementación de tecnologías educativas, programas de formación continua y proyectos de impacto social, manteniendo el liderazgo en educación católica."
        }
    ]
};

// Información institucional de FENCECH
export const fencechInstitutionalInfo = {
    foundedYear: "1960",
    membersCount: "150+",
    studentsServed: "100,000+",
    regions: "18 departamentos",
    motto: "Educación Católica para la Transformación Social"
};

// Datos de contacto específicos de FENCECH
export const fencechContactData = [
    {
        icon: "fa-light fa-map-marker-alt",
        title: "Nuestra Oficina",
        details: [
            "Col. Las Colinas",
            "Tegucigalpa, Honduras, C.A.",
            { text: "www.fencech.org", link: "https://www.fencech.org" }
        ]
    },
    {
        icon: "fa-light fa-phone",
        title: "Teléfonos",
        details: [
            "+504 2232-8944",
            "+504 2232-8945"
        ]
    },
    {
        icon: "fa-light fa-envelope",
        title: "Correos Electrónicos",
        details: [
            { text: "info@fencech.org", link: "mailto:info@fencech.org" },
            { text: "secretaria@fencech.org", link: "mailto:secretaria@fencech.org" }
        ]
    },
    {
        icon: "fa-light fa-clock",
        title: "Horarios de Atención",
        details: [
            "Lunes-Viernes: 8:00 AM-5:00 PM",
            "Sábados: 8:00 AM - 12:00 PM"
        ]
    }
];

// Información adicional de contacto
export const fencechContactInfo = {
    address: "Col. Las Colinas, Blvd. Juan Pablo II, Tegucigalpa, Honduras",
    phone: "+504 2232-8944",
    email: "info@fencech.org",
    website: "www.fencech.org",
    socialMedia: {
        facebook: "https://www.facebook.com/fencech",
        instagram: "https://www.instagram.com/fencech",
        twitter: "https://www.twitter.com/fencech"
    },
    mapCoordinates: {
        lat: 14.0818,
        lng: -87.2068,
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.8566!2d-87.2068!3d14.0818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa33!2sTegucigalpa%2C+Honduras!5e0!3m2!1ses!2shn!4v1698765432!5m2!1ses!2shn"
    }
};
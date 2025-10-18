// Datos de los institutos por región en FENCECH

export interface School {
    id: number;
    name: string;
    image: string;
    phone1: string;
    phone2?: string;
    email: string;
    website?: string;
    socialNetworks: {
        facebook?: string;
        instagram?: string;
        twitter?: string;
        youtube?: string;
    };
    region: 'RECOP' | 'RECENSUR' | 'RENOCC';
    location: string;
    description?: string;
}

// Datos de institutos RECOP (Región Centro Oriental y Pacífico)
export const recopSchools: School[] = [
    {
        id: 1,
        name: "C.E.N.G San Jerónimo Emiliani",
        image: "/assets/images/institutos/emiliani22.jpg",
        phone1: "+504 9270-0365",
        phone2: "",
        email: "",
        website: "",
        socialNetworks: {
            facebook: "https://www.facebook.com/share/19FHKyLUoH/",
            instagram: "",
            twitter: ""
        },
        region: "RECOP",
        location: "Tegucigalpa, Col. Carrizal #1",
        description: "Somos una institucion educativa de Caridad , Trabajo y Devoción"
    },
    {
        id: 2,
        name: "Centro Escolar Concepción de María",
        image: "/assets/images/institutos/concepcion_de_maria.png",
        phone1: "+504 3333-0138",
        email: "direccion@cecom.app",
        website: "",
        socialNetworks: {
            facebook: "https://facebook.com/centrosanjose",
            instagram: "https://www.instagram.com/cecom_hn/"
        },
        region: "RECOP",
        location: "16ta Calle, Juticalpa, Olancho",
        description: "Somos una institución donde humanizamos la educación, donde cada estudiante es un talento único."
    },
    {
        id: 3,
        name: "Instituto notre Dame - Escuela Bilingüe",
        image: "/assets/images/institutos/notredame.png",
        phone1: "+504 9874-0323",
        phone2: "+504 2647-4463",
        email: "notredamehonduras@gmail.com",
        website: "",
        socialNetworks: {
            facebook: "https://www.facebook.com/InstitutoNotreDameHn/",
            instagram: "",
        },
        region: "RECOP",
        location: "El Progreso, Yoro",
        description: "Educamos con la convicción que \"El Mundo Puede Ser Transformado Por Medio De La Educación\""
    },
    {
        id: 4,
        name: "C.E.N.G San Jerónimo Emiliani",
        image: "/assets/images/institutos/emiliani22.jpg",
        phone1: "+504 9270-0365",
        phone2: "",
        email: "",
        website: "",
        socialNetworks: {
            facebook: "https://www.facebook.com/share/19FHKyLUoH/",
            instagram: "",
            twitter: ""
        },
        region: "RECOP",
        location: "Tegucigalpa, Col. Carrizal #1",
        description: "Somos una institucion educativa de Caridad , Trabajo y Devoción"
    },
    {
        id: 5,
       name: "Centro Escolar Concepción de María",
        image: "/assets/images/institutos/concepcion_de_maria.png",
        phone1: "+504 3333-0138",
        email: "direccion@cecom.app",
        website: "",
        socialNetworks: {
            facebook: "https://facebook.com/centrosanjose",
            instagram: "https://www.instagram.com/cecom_hn/"
        },
        region: "RECOP",
        location: "16ta Calle, Juticalpa, Olancho",
        description: "Somos una institución donde humanizamos la educación, donde cada estudiante es un talento único."
    },
    {
        id: 6,
        name: "Instituto notre Dame - Escuela Bilingüe",
        image: "/assets/images/institutos/notredame.png",
        phone1: "+504 9874-0323",
        phone2: "+504 2647-4463",
        email: "notredamehonduras@gmail.com",
        website: "",
        socialNetworks: {
            facebook: "https://www.facebook.com/InstitutoNotreDameHn/",
            instagram: "",
        },
        region: "RECOP",
        location: "El Progreso, Yoro",
        description: "Educamos con la convicción que \"El Mundo Puede Ser Transformado Por Medio De La Educación\""
    }
];

// Datos de institutos RECENSUR (Región Centro Sur)
export const recensurSchools: School[] = [
    {
        id: 7,
        name: "Instituto San Pedro Sula",
        image: "/assets/images/schools/instituto-sps.jpg",
        phone1: "+504 2550-1111",
        phone2: "+504 2550-1112",
        email: "info@sps.edu.hn",
        website: "https://www.institutosps.edu.hn",
        socialNetworks: {
            facebook: "https://facebook.com/institutosps",
            instagram: "@instituto_sps",
            youtube: "https://youtube.com/institutosps"
        },
        region: "RECENSUR",
        location: "San Pedro Sula, Cortés",
        description: "Centro educativo líder en la zona industrial de Honduras."
    },
    {
        id: 8,
        name: "Colegio Bilingüe del Norte",
        image: "/assets/images/schools/bilingue-norte.jpg",
        phone1: "+504 2661-2222",
        email: "admisiones@norte.edu.hn",
        website: "https://www.bilingue norte.edu.hn",
        socialNetworks: {
            facebook: "https://facebook.com/bilinguenorte",
            instagram: "@bilingue_norte"
        },
        region: "RECENSUR",
        location: "Choloma, Cortés",
        description: "Educación bilingüe preparando estudiantes para el mundo globalizado."
    },
    {
        id: 9,
        name: "Instituto Técnico Industrial",
        image: "/assets/images/schools/tecnico-industrial.jpg",
        phone1: "+504 2772-3333",
        phone2: "+504 2772-3334",
        email: "contacto@industrial.edu.hn",
        website: "https://www.tecnicoindustrial.edu.hn",
        socialNetworks: {
            facebook: "https://facebook.com/tecnicoindustrial",
            twitter: "@Tecnico_Industrial"
        },
        region: "RECENSUR",
        location: "Villanueva, Cortés",
        description: "Formación técnica especializada en procesos industriales y manufactura."
    },
    {
        id: 10,
        name: "Centro Educativo Santa Bárbara",
        image: "/assets/images/schools/centro-santa-barbara.jpg",
        phone1: "+504 2883-4444",
        email: "info@santabarbara.edu.hn",
        socialNetworks: {
            facebook: "https://facebook.com/centrosantabarbara",
            instagram: "@centro_santabarbara"
        },
        region: "RECENSUR",
        location: "Santa Bárbara, Santa Bárbara",
        description: "Educación integral en el occidente hondureño."
    },
    {
        id: 11,
        name: "Instituto Agropecuario del Valle",
        image: "/assets/images/schools/agropecuario-valle.jpg",
        phone1: "+504 2994-5555",
        phone2: "+504 2994-5556",
        email: "contacto@agrovalle.edu.hn",
        website: "https://www.agrovalle.edu.hn",
        socialNetworks: {
            facebook: "https://facebook.com/agrovalle",
            youtube: "https://youtube.com/agrovalle"
        },
        region: "RECENSUR",
        location: "Siguatepeque, Comayagua",
        description: "Especialistas en formación agropecuaria y desarrollo rural."
    }
];

// Datos de institutos RENOCC (Región Norte Occidental y Centro Occidental)
export const renoccSchools: School[] = [
    {
        id: 12,
        name: "Instituto de la Costa Norte",
        image: "/assets/images/schools/costa-norte.jpg",
        phone1: "+504 2440-6666",
        phone2: "+504 2440-6667",
        email: "info@costanorte.edu.hn",
        website: "https://www.costanorte.edu.hn",
        socialNetworks: {
            facebook: "https://facebook.com/costanorte",
            instagram: "@costa_norte",
            twitter: "@Costa_Norte_HN"
        },
        region: "RENOCC",
        location: "La Ceiba, Atlántida",
        description: "Educación de excelencia en la hermosa costa caribeña de Honduras."
    },
    {
        id: 13,
        name: "Centro Educativo Copán",
        image: "/assets/images/schools/centro-copan.jpg",
        phone1: "+504 2651-7777",
        email: "contacto@copan.edu.hn",
        socialNetworks: {
            facebook: "https://facebook.com/centrocopan",
            instagram: "@centro_copan"
        },
        region: "RENOCC",
        location: "Santa Rosa de Copán, Copán",
        description: "Formación integral en la región occidental fronteriza."
    },
    {
        id: 14,
        name: "Instituto Técnico del Occidente",
        image: "/assets/images/schools/tecnico-occidente.jpg",
        phone1: "+504 2762-8888",
        phone2: "+504 2762-8889",
        email: "info@occidente.edu.hn",
        website: "https://www.tecnicooccidente.edu.hn",
        socialNetworks: {
            facebook: "https://facebook.com/tecnicooccidente",
            youtube: "https://youtube.com/tecnicooccidente"
        },
        region: "RENOCC",
        location: "Ocotepeque, Ocotepeque",
        description: "Educación técnica especializada en la frontera oeste de Honduras."
    },
    {
        id: 15,
        name: "Colegio Bilingüe Caribe",
        image: "/assets/images/schools/bilingue-caribe.jpg",
        phone1: "+504 2873-9999",
        email: "admisiones@caribe.edu.hn",
        website: "https://www.bilingueca ribe.edu.hn",
        socialNetworks: {
            facebook: "https://facebook.com/bilinguec aribe",
            instagram: "@bilingue_caribe"
        },
        region: "RENOCC",
        location: "Tela, Atlántida",
        description: "Educación bilingüe con enfoque en turismo y hospitalidad."
    },
    {
        id: 16,
        name: "Instituto Rural de Lempira",
        image: "/assets/images/schools/rural-lempira.jpg",
        phone1: "+504 2984-0000",
        email: "contacto@rurallempira.edu.hn",
        socialNetworks: {
            facebook: "https://facebook.com/rurallempira",
            instagram: "@rural_lempira"
        },
        region: "RENOCC",
        location: "Gracias, Lempira",
        description: "Educación rural con enfoque en desarrollo comunitario sostenible."
    },
    {
        id: 17,
        name: "Centro de Formación Yoro",
        image: "/assets/images/schools/formacion-yoro.jpg",
        phone1: "+504 2095-1111",
        phone2: "+504 2095-1112",
        email: "info@yoro.edu.hn",
        website: "https://www.centroyoro.edu.hn",
        socialNetworks: {
            facebook: "https://facebook.com/centroyoro",
            twitter: "@Centro_Yoro"
        },
        region: "RENOCC",
        location: "Yoro, Yoro",
        description: "Centro de formación técnica en el corazón de la región norte."
    }
];

// Exportar todos los institutos
export const allSchools: School[] = [...recopSchools, ...recensurSchools, ...renoccSchools];

// Función para obtener institutos por región
export const getSchoolsByRegion = (region: 'RECOP' | 'RECENSUR' | 'RENOCC'): School[] => {
    switch (region) {
        case 'RECOP':
            return recopSchools;
        case 'RECENSUR':
            return recensurSchools;
        case 'RENOCC':
            return renoccSchools;
        default:
            return [];
    }
};

export default allSchools;
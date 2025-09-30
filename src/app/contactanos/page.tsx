import type { Metadata } from "next";
import DefaultWrapper from "@/layout/DefaultWrapper";
import ContactanosMain from "@/components/pages/page-layout-one/contactanos/ContactanosMain";

export const metadata: Metadata = {
  title: "Contáctanos | FENCECH - Federación Nacional de Centros Educativos Católicos de Honduras",
  description: "Ponte en contacto con FENCECH para cualquier consulta sobre nuestros programas educativos, servicios y actividades. Estamos aquí para ayudarte.",
  keywords: "contacto FENCECH, educación católica Honduras, federación centros educativos, consultas educativas",
  openGraph: {
    title: "Contáctanos | FENCECH",
    description: "Ponte en contacto con FENCECH para cualquier consulta sobre nuestros programas educativos y servicios.",
    type: "website",
    locale: "es_HN",
  },
};

const ContactanosPage = () => {
  return (
    <DefaultWrapper>
      <ContactanosMain />
    </DefaultWrapper>
  );
};

export default ContactanosPage;
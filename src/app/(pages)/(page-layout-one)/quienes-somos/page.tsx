import type { Metadata } from "next";
import QuienesSomosMain from "@/components/pages/page-layout-one/quienes-somos/QuienesSomosMain";
import DefaultWrapper from "@/layout/DefaultWrapper";

export const metadata: Metadata = {
  title: "Quiénes Somos - FENCECH",
  description: "Conoce la historia, misión, visión y valores de la Federación Nacional de Centros Educativos Católicos de Honduras (FENCECH). Descubre nuestro compromiso con la educación católica.",
  keywords: "FENCECH, educación católica, Honduras, historia, misión, visión, valores, centros educativos",
};

const QuienesSomosPage = () => {
  return (
    <DefaultWrapper>
      <main>
        <QuienesSomosMain />
      </main>
    </DefaultWrapper>
  );
};

export default QuienesSomosPage;
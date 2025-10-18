
import { MenuItem } from "@/interFace/interFace";
/* import homeOneImg from "../../../public/assets/images/menu/menu-home-1.webp";
import homeTowImg from "../../../public/assets/images/menu/menu-home-2.webp";
import homeThreeImg from "../../../public/assets/images/menu/menu-home-3.webp";
import homeFourImg from "../../../public/assets/images/menu/menu-home-4.webp";
import homeFiveImg from "../../../public/assets/images/menu/menu-home-5.webp";
import homeSixImg from "../../../public/assets/images/menu/menu-home-6.webp";
import homeSevenImg from "../../../public/assets/images/menu/menu-home-7.webp";
import coummingSoonImg from "../../../public/assets/images/menu/menu-home-soon.webp"; */

const main_menu_data: MenuItem[] = [
  {
    id: 1,
    hasDropdown: false,
    children: false,
    active: true,
    title: "inicio",
    pluseIncon: false,
    link: "/",
    previewImg: false,
    /* submenus: [
      { title: "Online Course", link: "/online-course", previewImg: homeOneImg },
      { title: "University", link: "/university", previewImg: homeTowImg },
      { title: "Modern Schooling", link: "/modern-schooling", previewImg: homeThreeImg },
      { title: "Kindergarten", link: "/kindergarten", previewImg: homeFourImg },
      { title: "Quran Learning", link: "/quran-learning", previewImg: homeFiveImg },
      { title: "Book Store", link: "/book-store", previewImg: homeSixImg },
      { title: "Language Academy", link: "/language-academy", previewImg: homeSevenImg },
      { title: "Kitchen Coach - Soon", link: "#", previewImg: coummingSoonImg },
      { title: "Marketplace - Soon", link: "#", previewImg: coummingSoonImg },
      { title: "Course Hub - Soon", link: "#", previewImg: coummingSoonImg },
    ], */
  },
  {
    id: 2,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: false,
    title: "Quienes Somos",
    pluseIncon: false,
    link: "/quienes-somos",
    /* submenus: [
    
      {
        title: "Evento 1",
        link: "/course-lesson",
        pluseIncon: false,
      },
      {
        title: "Evento 2",
        link: "/create-course",
        pluseIncon: false,
      },
    ], */
  },
  {
    id: 3,
    hasDropdown: true,
    active: true,
    megaMenu: false,
    children: true,
    title: "Regiones",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "RECOP",
        link: "/regiones/recop",
        pluseIncon: false,
      },
      {
        title: "RECENSUR",
        link: "/regiones/recensur",
        pluseIncon: false,
      },
      {
        title: "RENOCC",
        link: "/regiones/renocc",
        pluseIncon: false,
      },
    ],
  },
  {
    id: 4,
    hasDropdown: false,
    active: true,
    megaMenu: false,
    children: false,
    title: "Contáctanos",
    pluseIncon: false,
    link: "/contactanos",
    /* submenus: [
    
      {
        title: "Evento 1",
        link: "/course-lesson",
        pluseIncon: false,
      },
      {
        title: "Evento 2",
        link: "/create-course",
        pluseIncon: false,
      },
    ], */
  }

];

export default main_menu_data;

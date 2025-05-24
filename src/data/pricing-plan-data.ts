import pricingThumb1 from "../../public/assets/images/price/pricing_thumb01.webp";
import pricingThumb2 from "../../public/assets/images/price/pricing_thumb02.webp";
import pricingThumb3 from "../../public/assets/images/price/pricing_thumb03.webp";

import RECENSUR2 from "../../public/assets/images/price/RECENSUR2.png";
import RECOP from "../../public/assets/images/price/RECOP.png";
import RECOP2 from "../../public/assets/images/price/RECOP2.png";
import RENOCC2 from "../../public/assets/images/price/RENOCC2.png";

import checkIconSvg from "../../public/assets/images/icon/check.svg";
//pricing plan
import bookSvg from "../../public/assets/images/icon/book-3.svg";
import graduationSvg from "../../public/assets/images/icon/graduation.svg";
import gemSvg from "../../public/assets/images/icon/gem.svg";
import { PricingPlan } from "@/interFace/pricing-interface";


export const coursePricingPlanData = [
    //Online Course pricing plan data
    {
        id: 1,
        image: RECOP2,
        checkIcon: checkIconSvg,
        title: "Basic Plan",
        courses: 10,
        description: "Regional de Comayagua y La PAZ",
        features: [
            "Instituto San Jorge",
            "Instituto San Matias",
            "Instituto San José",
            "Instituto San Matias",
        ],
        price: 10,
        url: "/pricing",
        hasBackground: false,
    },
    {
        id: 2,
        image: RECENSUR2,
        checkIcon: checkIconSvg,
        title: "Standard Plan",
        courses: 13,
        description: "Regional Centro Sur del Pais.",
        features: [
            "Instituto San Jorge",
            "Instituto San Matias",
            "Instituto San José",
            "Instituto San Matias",
        ],
        price: 13,
        url: "/pricing",
        hasBackground: true,
    },
    {
        id: 3,
        image: RENOCC2,
        checkIcon: checkIconSvg,
        title: "Premium Plan",
        courses: 13,
        description: "Regional Norte - Occidente",
        features: [
            "Instituto San Jorge",
            "Instituto San Matias",
            "Instituto San José",
            "Instituto San Matias",
        ],
        price: 16,
        url: "/pricing",
        hasBackground: false,
    },
    //Online Course pricing plan data end
];

// Pricing plan data structure
export const pricingPlans: PricingPlan[] = [
    {
        id: 1,
        thumb: bookSvg,
        alt: "Education Pricing",
        title: "Starter",
        description: "Best for individual learners",
        monthly: { price: 19, duration: "/Month" },
        yearly: { price: 199, duration: "/Year" },
        buttonText: "Choose Starter Plan",
        buttonType: "outline-primary",
        features: [
            "Access to 50+ Courses",
            "Course Completion Certificates",
            "Self-Paced Learning",
            "Basic Customer Support",
        ],
    },
    {
        id: 2,
        badge: "Popular",
        thumb: graduationSvg,
        alt: "Education Pricing",
        title: "Professional",
        description: "Ideal for career-focused learners",
        monthly: { price: 39, duration: "/Month" },
        yearly: { price: 429, duration: "/Year" },
        buttonText: "Choose Professional Plan",
        buttonType: "primary",
        features: [
            "Access to 200+ Courses",
            "Live Classes & Webinars",
            "Advanced Certifications",
            "Priority Customer Support",
        ],
    },
    {
        id: 3,
        thumb: gemSvg,
        alt: "Education Pricing",
        title: "Institutional",
        description: "Designed for schools and organizations",
        monthly: { price: 99, duration: "/Month" },
        yearly: { price: 1099, duration: "/Year" },
        buttonText: "Choose Institutional Plan",
        buttonType: "outline-primary",
        features: [
            "Access to All Courses",
            "Dedicated Account Manager",
            "Custom Learning Paths",
            "24/7 Support",
        ],
    },
];
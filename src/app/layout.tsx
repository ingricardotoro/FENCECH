import { Roboto } from "next/font/google";
import "./globals.scss";
import "swiper/css/bundle";
import "react-photo-view/dist/react-photo-view.css";
import "nouislider/dist/nouislider.css";
import "react-circular-progressbar/dist/styles.css";
import AppProvider from "@/contextApi/AppProvider";
import { Toaster } from "sonner";
import ReduxProvider from "@/redux/provider";
import { VideoProvider } from "@/contextApi/VideoProvider";
import GlobalVideoModal from "@/components/common/popup/GlobalVideoModal";
import { Metadata } from "next";

// Load Roboto font
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

// Note: Big Shoulders Display is loaded via Google Fonts in _theme.scss
// Uncomment below if you need it as a Next.js font variable
// import { Bebas_Neue } from "next/font/google";
// const bigShoulders = Bebas_Neue({
//   variable: "--font-big-shoulders",
//   subsets: ["latin"],
//   weight: ["400"],
// });

export const metadata: Metadata = {
  title: "FENCECH - Honduras",
  description: "Federación Nacional de Centros Educativos Catolicos de Honduras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={`body-bg ${roboto.variable}`}>
        <VideoProvider>
          <ReduxProvider>
            <AppProvider>
              {children}
            </AppProvider>
            <Toaster position="top-center" richColors />
            <GlobalVideoModal />
          </ReduxProvider>
        </VideoProvider>
      </body>
    </html>
  );
}






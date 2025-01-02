import localFont from "next/font/local";
import "./globals.css";
import {Open_Sans, Ubuntu} from "next/font/google"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedCursor from "react-animated-cursor"
import WelcomePopup from "@/features/WelcomePopup";
import Aoss from "@/components/Aos";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Morpheous - The arena for Dominators",
  description: "Generated by create next app",
};

const openSans = Open_Sans({
  subsets: ['latin'], 
  variable: '--font-open-sans', 
  weight: ['300','400','500','600','700']
});

const ubuntu = Ubuntu({
  subsets: ['latin'],
  variable: '--font-ubuntu',
  weight: ['400','500', '700'], 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${ubuntu.variable} antialiased bg-[#070b28]`}
      >
        <Navbar/>
        {/* <WelcomePopup/> */}
        <Aoss/>
        <AnimatedCursor
  className="animated-cursor"
  innerSize={8} 
  outerSize={15} 
  color="37, 99, 235" 
  outerAlpha={0.3}
  innerScale={1} 
  outerScale={1.5} 
  trailingSpeed={6} 
/>


        {children}
        <Footer/>
      </body>
    </html>
  );
}

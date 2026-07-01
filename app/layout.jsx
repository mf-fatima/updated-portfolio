import { Outfit } from "next/font/google";
import "./globals.css";
// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Maryam Fatima",
  description: "Full Stack Developer portfolio of Maryam Fatima.",
  icons: {
    icon: "/blank.svg",
    apple: "/blank.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
        <Header/>
        {children}
        <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}

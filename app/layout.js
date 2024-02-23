import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Router from "next/navigation";
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";

import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Head>
            <title>Real Estate</title>
          </Head>
          <Box maxWidth="1280px" m="auto">
            <header>
              <Navbar />
            </header>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
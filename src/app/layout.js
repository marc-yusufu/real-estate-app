
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { ChakraProvider } from "@chakra-ui/react";

import ChakraProviders from "../../components/chakraProvider";


import Head from "next/head";
import { Box } from "@chakra-ui/react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  //const {children} = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        <Head>
          <title>Real estate</title>
        </Head>
        <ChakraProviders>

        
          <Box maxWidth="1280px" m="auto">
            <header>
              Navbar
            </header>
            <main>
              
                {children}
              
            </main>
            <footer>
              Footer
            </footer>
          </Box>
        </ChakraProviders>

      </body>
    </html>
  );
}

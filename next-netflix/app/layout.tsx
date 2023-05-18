// "use client"
// import './styles/globals.css'
// import { Inter } from 'next/font/google'
// import { RecoilRoot } from 'recoil';

// const inter = Inter({ subsets: ['latin'] })


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <RecoilRoot>
//         <body>{children}</body>
//       </RecoilRoot>
//     </html>
//   )
// }
"use client";
import Providers from "./utils/provider";
import React from "react";
import "../app/styles/globals.css";
import { RecoilRoot } from "recoil";

export const metadata = {
  title: "Nextflix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
        <body>
          <Providers> 
            <RecoilRoot>
            {children}
            </RecoilRoot>
          </Providers>
        </body>
 
      
    </html>
  );
}

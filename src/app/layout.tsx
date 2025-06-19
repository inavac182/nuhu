import type { Metadata } from "next";
import { Sen } from "next/font/google";

import { ViewWrapper } from '@/lib';
import './global.css';

const sen = Sen({ style: 'normal', subsets: ['latin'], variable: '--font-family' });

export const metadata: Metadata = {
  title: "nuhu | Nutrientes para humanos",
  description: "En nuhu creamos y proveemos bebidas y alimentos que son saludables, energeticos, con enzymas y nutrientes para una vida saludable en los humanos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sen.variable}>
          <ViewWrapper>
            {children}
          </ViewWrapper>
      </body>
    </html>
  );
}

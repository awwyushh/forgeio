import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const ovSoge = localFont({
    src: [
        {
            path: './fonts/OVSoge-Black.otf',
            weight: '900',
            style: 'normal',
        },
        {
            path: './fonts/OVSoge-ExtraBold.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: './fonts/OVSoge-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/OVSoge-SemiBold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/OVSoge-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/OVSoge-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/OVSoge-Thin.otf',
            weight: '200',
            style: 'normal',
        },
        {
            path: './fonts/OVSoge-ExtraLight.otf',
            weight: '100',
            style: 'normal',
        }
    ],
    variable: '--font-ovsoge',
})

export const metadata: Metadata = {
  title: "forge.io",
  description: "Let's pitch the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ovSoge.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

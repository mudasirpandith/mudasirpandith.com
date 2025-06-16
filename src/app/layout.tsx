import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
    title: 'Mudasir Pandith',
    description: 'Associate Software Engineer',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <meta name="algolia-site-verification" content="6489EC27BA6DD803" />
            <body className={inter.className}>{children}</body>
        </html>
    );
}

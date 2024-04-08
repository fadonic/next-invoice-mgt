import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | IMS Dashboard',
    default: 'Ims Dashboard',
  },
  description: 'A IMS Dashboard built with App Router.',
  metadataBase: new URL(
    'https://next-invoice-1zn6vy7b2-fadonics-projects.vercel.app/',
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

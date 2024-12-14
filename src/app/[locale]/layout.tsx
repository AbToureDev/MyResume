import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
  title: "My portfolio",
  description: "My portfolio",
};

export default async function RootLayout({children, params: {locale}
                                         }: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
      <html lang={locale} className='bg-blue'>
      <body className={roboto.className}>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
      </body>
      </html>
  );
}

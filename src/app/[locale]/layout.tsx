import type { Metadata } from "next";
import {Poppins, Roboto} from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
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
      <body className={poppins.className}>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
      </body>
      </html>
  );
}

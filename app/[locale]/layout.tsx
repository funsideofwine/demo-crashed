import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* Header with logo and language toggle */}
          <header className="w-full flex justify-between items-center py-4 px-8 border-b">
            <div className="font-bold text-xl">GRC Compliance</div>
            <div>{/* Language toggle placeholder */}🌐</div>
          </header>
          {children}
          {/* Footer */}
          <footer className="w-full text-center py-4 border-t mt-8 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GRC Compliance. All rights reserved.
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 
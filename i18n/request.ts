import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  if (!locale || !locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: require(`./locales/${locale}/common.json`)
  };
}); 
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('common');
  return (
    <div className="flex flex-col min-h-screen items-center justify-between">
      <main className="flex flex-col gap-12 items-center w-full max-w-4xl mx-auto py-16 px-4">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold mb-2">{t('GRC Compliance Platform')}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            {t('Unified Governance, Risk & Compliance Management for Saudi Arabia')}
          </p>
          <div className="flex justify-center gap-4">
            <a href="/auth/signup" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition">{t('Get Started')}</a>
            <a href="/auth/signin" className="border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition">{t('Sign In')}</a>
          </div>
        </section>
        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded shadow text-center">
            <h2 className="font-semibold mb-2">{t('Bilingual & RTL Support')}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('Arabic/English interface, RTL layout, and Saudi localization')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded shadow text-center">
            <h2 className="font-semibold mb-2">{t('Saudi Regulatory Compliance')}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('SAMA, CITC, NCA, SDAIA, PDPL, and more')}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded shadow text-center">
            <h2 className="font-semibold mb-2">{t('Unified GRC Platform')}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t('Governance, risk, compliance, audit, and incident management')}</p>
          </div>
        </section>
      </main>
    </div>
  );
} 
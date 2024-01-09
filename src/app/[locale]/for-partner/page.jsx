import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import '../style.css';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    keywords: t('keywords'),
  };
}
export default function Page({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Partner');

  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subTitle')}</p>
      <h2>{t('cooperationTitle')}</h2>
      {t('cooperationList').split('///').map((el, index)=><p key={index}>{el}</p>)}
   
    </div>
  );
}

import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title')
  };
}
export default function Page({ params: {locale}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Partner');
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subTitle')}</p>
    </div>
  )
}

import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import '../style.css';
import Image from 'next/image';
import service_1 from '../../../../public/services_1.jpeg'

import FormA1 from '@/components/FormA1'

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'MetadataForm'});
 
  return {
    title: t('title'),
    keywords: t('keywords')
  };
}
export default function Page({ params: {locale}}) {
    unstable_setRequestLocale(locale);
    const t = useTranslations('Form');

  return ( 
    <div> 
      <h1>{t('title')}</h1>
      <p>{t('subTitle')}</p>  
      {/* <img src={service_1} alt="" /> */}
      <Image  
      src={service_1}
      width={500}
      // height={500}
      alt={t('imageAlt')}
      />
      <ul>
      {t('list').split('/').map((el, index)=><li key={index}>{el}</li>)}
      </ul>
      <FormA1/>
    </div>
  )
}

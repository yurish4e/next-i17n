import { useTranslations } from 'next-intl';
import './style.css';
import {unstable_setRequestLocale} from 'next-intl/server';
import Image from 'next/image';
import help_2 from '../../../public/help_2.jpg'

export default function Index({params: {locale}}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');
  return (
    <div>
      <div className="services-head">
        <h1>{t('title')}</h1>
        <h2>{t('subTitle')}</h2>
      </div>
      <div className="services">
        {Array.from({ length: 3 }, (_, index) => index + 1).map((el) => (
          <div key={el} className="services__item">
            <h3>{t(`service_${el}.description`)}</h3>
            <h2>{t(`service_${el}.description`)}</h2>
            <p>{t(`service_${el}.description`)}</p>
          </div>
        ))}
        
      </div>
      <Image  
      src={help_2}
      className='services__image'
      alt={t('alt')}
      />
    </div>
  );
}

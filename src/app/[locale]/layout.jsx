import {unstable_setRequestLocale} from 'next-intl/server';
import {LOCALES} from '../../LOCALES';
import LangSwitcher from '../../components/LangSwitcher'
import Navigation from '../../components/Navigation';


export function generateStaticParams() {
  return LOCALES.map((locale) => ({locale}));
}

export default function LocaleLayout({children, params: {locale}}) {
  unstable_setRequestLocale(locale);
    return (
      <html lang={locale}>
        <body>
          <header>
            <LangSwitcher/>
            <Navigation/>
          </header>
          {children}</body>
      </html>
    );
  }
import {unstable_setRequestLocale} from 'next-intl/server';

export default function layout({children, params: {locale}}) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body>
      
        {children}
       
        </body>
    </html>
  )
}

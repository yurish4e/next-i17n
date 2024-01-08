import {unstable_setRequestLocale} from 'next-intl/server';

export default function layout({children, params: {locale}}) {
  unstable_setRequestLocale(locale);
  return (
    <html>
      <body>
      
        {children}
       
        </body>
    </html>
  )
}

'use client';
 
import {usePathname, useRouter} from '@/navigation';
import {LOCALES} from '../LOCALES';
export default function LangSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
  return (
    <div className='flex p-4 space-x-2'>
      {LOCALES.map(lang=><button key={lang} onClick={()=>router.replace(pathname, {locale: lang})}>{lang.toUpperCase()}</button>)}
        {/* <button onClick={()=>router.replace(pathname, {locale: 'en'})}>EN</button>
        <button onClick={()=>router.replace(pathname, {locale: 'ua'})}>UA</button> */}
    </div>
  )
}

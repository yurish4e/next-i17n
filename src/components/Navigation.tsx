import { useTranslations } from 'next-intl';
import NavigationLink from './NavigationLink';
import './style.css';

export default function Navigation() {
    const t = useTranslations('Menu');
  return (
    <nav>
      <NavigationLink href="/">{t('home')}</NavigationLink>
      <NavigationLink href="/for-partner">{t('partners')}</NavigationLink>
      <NavigationLink href="/form-a1">{t('form')}</NavigationLink>
      <NavigationLink href="/jobs">{t('jobs')}</NavigationLink>
    </nav>
  );
}

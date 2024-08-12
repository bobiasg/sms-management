import '@/styles/front.scss';

import { Hind } from 'next/font/google';
import { unstable_setRequestLocale } from 'next-intl/server';

import Footer from '@/components/ui/unauth/footer';
import Header from '@/components/ui/unauth/header';
import ScrollTop from '@/components/ui/unauth/scroll-top';

const hind = Hind({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-hind',
});

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  return (
    <main className={hind.className}>
      <Header />

      {props.children}

      <Footer />

      <ScrollTop />
    </main>
  );
}

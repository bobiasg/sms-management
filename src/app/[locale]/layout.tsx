// import '@/styles/global.scss';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { toAbsoluteUrl } from '@/libs/AssetHelpers';
import QueryProviders from '@/libs/providers/react-query-provider';
import StoreProvider from '@/libs/stores/store-provider';
import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  title:
    "Metronic - The World's #1 Selling React & Bootstrap Admin Template by KeenThemes",
  description: 'My App is a...',
  icons: toAbsoluteUrl('media/logos/favicon.ico'),
};

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body
        id="kt_body"
        // className="page-loading"
      >
        <div id="root">
          <StoreProvider>
            <QueryProviders>
              <NextIntlClientProvider
                locale={props.params.locale}
                messages={messages}
              >
                {props.children}
              </NextIntlClientProvider>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryProviders>
          </StoreProvider>
        </div>

        <div id="root-modals" />
      </body>
    </html>
  );
}

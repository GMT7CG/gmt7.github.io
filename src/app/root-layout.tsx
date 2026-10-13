import { fontVariables } from '@/lib/fonts';
import type { Locale } from '@/lib/i18n';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

export function RootLayout({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const organizationSchema = generateOrganizationSchema({ locale });
  const websiteSchema = generateWebsiteSchema({ locale });

  return (
    <html lang={locale} className={`${fontVariables} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader locale={locale} />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-14">{children}</main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}

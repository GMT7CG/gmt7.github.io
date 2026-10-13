import type { Metadata } from 'next';
import { Lora, Open_Sans } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';
import { externalLinks, scoutingUnits, siteConfig, sitePages } from '@/lib/site';
import { SiteHeader } from './site-header';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600'],
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['600'],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  referrer: 'strict-origin-when-cross-origin',
};

const designerUrl = 'https://aglflorida.com';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" className={`${openSans.variable} ${lora.variable} h-full antialiased`}>
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
        <SiteHeader />
        <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-14">{children}</main>
        <footer className="bg-gradient-to-br from-[#16210f] to-forest text-background/90">
          <div className="mx-auto max-w-5xl px-6 py-12">
            <div className="flex flex-col gap-10 md:flex-row md:gap-16">
              <div className="md:max-w-sm">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
                  About
                </h3>
                <p className="text-sm text-background/75">{siteConfig.description}</p>
                <p className="mt-4 text-sm text-background/75">
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}{' '}
                  {siteConfig.address.zip}
                  <br />
                  EIN {siteConfig.ein}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:flex-1 md:justify-end">
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
                    Site
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {sitePages.map((page) => (
                      <li key={page.path}>
                        <Link href={page.path} className="transition-colors hover:text-camel">
                          {page.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
                    Units
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {scoutingUnits.map((unit) => (
                      <li key={unit.name}>
                        <a
                          href={unit.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-camel"
                        >
                          {unit.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
                    Links
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {externalLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-camel"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-background/20 pt-6 text-xs text-background/60">
              Site designed and maintained by{' '}
              <a
                href={designerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:text-camel"
              >
                AGL Consulting
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Lora, Open_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';
import { externalLinks, scoutingUnits, siteConfig, sitePages } from '@/lib/site';

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
        <header className="relative h-[14rem] w-full overflow-hidden sm:h-[17rem]">
          <Image
            src="/scout-hut.webp"
            alt="The Troop 7 Scout Hut at 1107 South Greenway Drive, Coral Gables"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(30,43,31,0.92), rgba(107,107,46,0.75))',
            }}
          />
          <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center justify-between gap-4 px-6">
            <Link
              href="/"
              className="flex items-center gap-3 font-heading text-sm font-semibold uppercase tracking-wide text-forest-foreground transition-colors hover:text-camel sm:text-base"
            >
              <Image
                src="/gmt7-logo.webp"
                alt="George Merrick Troop 7 of Coral Gables logo"
                width={160}
                height={160}
                className="h-40 w-40 shrink-0"
              />
              <span>
                George Merrick Troop 7
                <br />
                of Coral Gables
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <nav aria-label="Primary">
                <ul className="flex items-center gap-6 text-sm font-medium text-forest-foreground">
                  {sitePages
                    .filter((page) => page.path !== '/contact')
                    .map((page) => (
                      <li key={page.path}>
                        <Link href={page.path} className="transition-colors hover:text-camel">
                          {page.label}
                        </Link>
                      </li>
                    ))}
                  <li>
                    <Link
                      href="/contact"
                      className="rounded-full bg-camel px-5 py-2 text-xs font-semibold uppercase tracking-wide text-forest-foreground transition-opacity hover:opacity-90"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
              <a
                href="https://github.com/GMT7CG"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden shrink-0 text-forest-foreground transition-colors hover:text-camel lg:block"
              >
                <svg
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.38 7.86 10.9 0.57 0.1 0.78-0.25 0.78-0.55 0-0.27-0.01-1.17-0.02-2.12-3.2 0.7-3.88-1.36-3.88-1.36-0.52-1.33-1.28-1.68-1.28-1.68-1.04-0.71 0.08-0.7 0.08-0.7 1.16 0.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36 0.96 0.1-0.74 0.4-1.25 0.73-1.54-2.56-0.29-5.25-1.28-5.25-5.7 0-1.26 0.45-2.29 1.19-3.1-0.12-0.29-0.52-1.46 0.11-3.05 0 0 0.97-0.31 3.18 1.18 0.92-0.26 1.91-0.38 2.89-0.38 0.98 0 1.97 0.13 2.89 0.38 2.21-1.49 3.18-1.18 3.18-1.18 0.63 1.59 0.23 2.76 0.11 3.05 0.74 0.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69 0.42 0.36 0.77 1.07 0.77 2.15 0 1.56-0.01 2.81-0.01 3.19 0 0.31 0.21 0.66 0.79 0.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35 0.5 12 0.5Z" />
                </svg>
                <span className="sr-only">GMT7CG organization on GitHub</span>
              </a>
            </div>
          </div>
        </header>
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

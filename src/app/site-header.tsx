'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  delocalizePath,
  type Locale,
  languageSwitchLabel,
  localizePath,
  menuLabels,
  nav,
  otherLocale,
} from '@/lib/i18n';
import { sitePages } from '@/lib/site';

const heroAlt: Record<Locale, string> = {
  en: 'The Troop 7 Scout Hut at 1107 South Greenway Drive, Coral Gables',
  es: 'La Casa Scout de Troop 7 en 1107 South Greenway Drive, Coral Gables',
};

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const canonicalPath = delocalizePath(pathname);
  const targetLocale = otherLocale(locale);
  const switchHref = localizePath(canonicalPath, targetLocale);
  const menu = menuLabels[locale];

  const navLinks = sitePages
    .filter((page) => page.path !== '/contact')
    .map((page) => ({ path: localizePath(page.path, locale), label: nav[locale][page.path] }));
  const contactHref = localizePath('/contact', locale);
  const contactLabel = nav[locale]['/contact'];

  return (
    <header className="relative z-20 h-[14rem] w-full sm:h-[17rem]">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/scout-hut.webp"
          alt={heroAlt[locale]}
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
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center justify-between gap-4 px-6">
        <Link
          href={localizePath('/', locale)}
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 font-heading text-sm font-semibold uppercase tracking-wide text-forest-foreground transition-colors hover:text-camel sm:text-base"
        >
          <Image
            src="/gmt7-logo.webp"
            alt="George Merrick Troop 7 of Coral Gables logo"
            width={160}
            height={160}
            className="h-16 w-16 shrink-0 sm:h-28 sm:w-28 md:h-40 md:w-40"
          />
          <span className="hidden sm:inline">
            George Merrick Troop 7
            <br />
            of Coral Gables
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex items-center gap-6 text-sm font-medium text-forest-foreground">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="transition-colors hover:text-camel">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={contactHref}
                  className="rounded-full bg-camel px-5 py-2 text-xs font-semibold uppercase tracking-wide text-forest-foreground transition-opacity hover:opacity-90"
                >
                  {contactLabel}
                </Link>
              </li>
              <li>
                <Link href={switchHref} className="transition-colors hover:text-camel">
                  {languageSwitchLabel[locale]}
                </Link>
              </li>
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            aria-expanded={open}
            aria-controls="primary-nav-mobile"
            aria-label={open ? menu.close : menu.open}
            className="flex items-center justify-center text-forest-foreground transition-colors hover:text-camel sm:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              width={28}
              height={28}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="primary-nav-mobile"
          aria-label="Primary mobile"
          className="absolute inset-x-0 top-full z-20 bg-forest/95 px-6 py-4 sm:hidden"
        >
          <ul className="flex flex-col gap-4 text-sm font-medium text-forest-foreground">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="transition-colors hover:text-camel"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={contactHref}
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-camel px-5 py-2 text-xs font-semibold uppercase tracking-wide text-forest-foreground transition-opacity hover:opacity-90"
              >
                {contactLabel}
              </Link>
            </li>
            <li>
              <Link
                href={switchHref}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-camel"
              >
                {languageSwitchLabel[locale]}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

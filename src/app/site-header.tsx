'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { sitePages } from '@/lib/site';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 h-[14rem] w-full sm:h-[17rem]">
      <div className="absolute inset-0 overflow-hidden">
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
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
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
            <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden="true">
              <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.38 7.86 10.9 0.57 0.1 0.78-0.25 0.78-0.55 0-0.27-0.01-1.17-0.02-2.12-3.2 0.7-3.88-1.36-3.88-1.36-0.52-1.33-1.28-1.68-1.28-1.68-1.04-0.71 0.08-0.7 0.08-0.7 1.16 0.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36 0.96 0.1-0.74 0.4-1.25 0.73-1.54-2.56-0.29-5.25-1.28-5.25-5.7 0-1.26 0.45-2.29 1.19-3.1-0.12-0.29-0.52-1.46 0.11-3.05 0 0 0.97-0.31 3.18 1.18 0.92-0.26 1.91-0.38 2.89-0.38 0.98 0 1.97 0.13 2.89 0.38 2.21-1.49 3.18-1.18 3.18-1.18 0.63 1.59 0.23 2.76 0.11 3.05 0.74 0.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69 0.42 0.36 0.77 1.07 0.77 2.15 0 1.56-0.01 2.81-0.01 3.19 0 0.31 0.21 0.66 0.79 0.55C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35 0.5 12 0.5Z" />
            </svg>
            <span className="sr-only">GMT7CG organization on GitHub</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            aria-expanded={open}
            aria-controls="primary-nav-mobile"
            aria-label={open ? 'Close menu' : 'Open menu'}
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
            {sitePages
              .filter((page) => page.path !== '/contact')
              .map((page) => (
                <li key={page.path}>
                  <Link
                    href={page.path}
                    onClick={() => setOpen(false)}
                    className="transition-colors hover:text-camel"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-camel px-5 py-2 text-xs font-semibold uppercase tracking-wide text-forest-foreground transition-opacity hover:opacity-90"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

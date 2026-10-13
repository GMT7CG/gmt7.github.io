import type { Metadata } from 'next';
import '../globals.css';
import { orgDescription } from '@/lib/i18n';
import { siteConfig } from '@/lib/site';
import { RootLayout } from '../root-layout';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: orgDescription.es,
  metadataBase: new URL(siteConfig.url),
  referrer: 'strict-origin-when-cross-origin',
};

export default function SpanishRootLayout({ children }: { children: React.ReactNode }) {
  return <RootLayout locale="es">{children}</RootLayout>;
}

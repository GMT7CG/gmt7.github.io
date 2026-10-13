import type { Metadata } from 'next';
import '../globals.css';
import { siteConfig } from '@/lib/site';
import { RootLayout } from '../root-layout';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  referrer: 'strict-origin-when-cross-origin',
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return <RootLayout locale="en">{children}</RootLayout>;
}

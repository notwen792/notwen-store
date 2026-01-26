import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Installation Guide - notwen Store',
  description: 'Installation guide for scripts.',
};

export default function InstallationGuideLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

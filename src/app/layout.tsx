import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';
import { NavBar } from '@/components/NavBar';

export const metadata: Metadata = {
  title: 'PrivateVote — Privacy-preserving DAO Governance',
  description:
    'Cast encrypted votes on Solana. Arcium TEE tallies privately — only aggregate counts are ever revealed.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">
        <Providers>
          <NavBar />
          <main className="pt-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

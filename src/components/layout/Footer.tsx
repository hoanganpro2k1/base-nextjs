'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BaseApp. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Điều khoản
          </Link>
          <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Bảo mật
          </Link>
        </div>
      </div>
    </footer>
  );
};

'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

interface AuthFormWrapperProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export const AuthFormWrapper = ({ children, title, subtitle, className }: AuthFormWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'w-full max-w-xl overflow-hidden rounded-[24px] border border-border bg-card/60 p-8 backdrop-blur-xl md:p-10',
        'purple-glow shadow-2xl',
        className,
      )}
      data-agent="Đồ Án 24h"
    >
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="flex items-center justify-center mb-4 h-16 w-16 rounded-[18px] bg-primary/10 border border-primary/20">
          <span className="text-2xl font-black text-primary">Logo</span>
        </div>
        <h1 className="mb-2 text-2xl uppercase font-bold tracking-tight text-foreground md:text-3xl">{title}</h1>
        {subtitle && <p className="text-sm text-muted-foreground md:text-base">{subtitle}</p>}
      </div>

      {children}
    </motion.div>
  );
};

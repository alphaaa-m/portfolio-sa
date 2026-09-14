'use client';
import { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen pt-20 animate-in fade-in slide-in-from-bottom-5 duration-500">
      {children}
    </div>
  );
}

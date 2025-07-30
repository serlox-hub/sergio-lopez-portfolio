'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routes } from '@/resources';

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    const mainRoute = Object.keys(routes).find(
      (route) => route !== '/' && routes[route as keyof typeof routes]
    );
    router.replace(mainRoute || '/');
  }, [router]);

  return null;
}

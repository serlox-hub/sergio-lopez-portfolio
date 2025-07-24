import { redirect } from 'next/navigation';
import { routes } from '@/resources';

export default function RedirectPage() {
  const mainRoute = Object.keys(routes).find((route) => route !== "/" && routes[route as keyof typeof routes]);
  redirect(mainRoute || "/");
}
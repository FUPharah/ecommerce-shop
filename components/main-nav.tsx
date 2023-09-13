"use client";

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Category } from '@/types';

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
  data,
}) => {
  const pathname = usePathname()
  const routes = data.map((route) =>({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x lg:space-x-6">
      {routes.map((route) => (
        <Link key={route.href} href={route.href} className={cn(
          "text-lg font-bold transition-colors hover:text-lime-500",
          route.active ? "text-rose-600" : ""
        )}>
          {route.label}
        </Link>
      ))}
    </nav>
  )
};

export default MainNav;

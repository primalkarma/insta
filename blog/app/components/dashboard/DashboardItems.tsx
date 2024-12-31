'use client';

import { navLinks } from "@/app/dashboard/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardItems = () => {
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className={cn(
            pathname === item.href
              ? "bg-muted text-primary"
              : "text-muted-foreground hover:bg-muted/10",
              "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary/70"
          )}
        >
          <item.icon size={20} />
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default DashboardItems;

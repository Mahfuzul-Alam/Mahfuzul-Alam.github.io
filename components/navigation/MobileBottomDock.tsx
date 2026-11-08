"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  FolderGit2,
  FlaskConical,
  FileText,
  Mail,
} from "lucide-react";

interface DockItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DOCK_ITEMS: DockItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about/", label: "About", icon: User },
  { href: "/projects/", label: "Projects", icon: FolderGit2 },
  { href: "/research/", label: "Research", icon: FlaskConical },
  { href: "/writing/", label: "Writing", icon: FileText },
  { href: "/contact/", label: "Contact", icon: Mail },
];

export function MobileBottomDock() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    const cleanHref = href.replace(/\/$/, "");
    return pathname.startsWith(cleanHref);
  };

  return (
    <nav
      aria-label="Mobile Navigation Dock"
      className="md:hidden fixed bottom-2.5 inset-x-2.5 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[420px] z-40 animate-fade-up select-none"
    >
      <div className="bg-white/92 backdrop-blur-xl border border-apple-border/80 shadow-apple-lg rounded-2xl p-1 sm:p-1.5 flex items-center justify-between gap-0.5 pb-[max(0.25rem,env(safe-area-inset-bottom,0px))]">
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={`flex-1 flex flex-col items-center justify-center py-1.5 px-0.5 rounded-xl transition-all duration-200 active:scale-90 min-h-[44px] ${
                active
                  ? "text-apple-blue font-semibold bg-apple-blueLight/70 shadow-apple-xs"
                  : "text-apple-secondary hover:text-apple-text active:bg-black/5"
              }`}
            >
              <Icon
                className={`w-4 h-4 mb-0.5 transition-transform duration-200 ${
                  active ? "scale-110 stroke-[2.25]" : "stroke-[1.75]"
                }`}
              />
              <span className="text-[10px] leading-none tracking-tight">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

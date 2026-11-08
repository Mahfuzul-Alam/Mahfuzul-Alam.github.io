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
      className="md:hidden fixed bottom-2.5 inset-x-2.5 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-[420px] z-50 animate-fade-up select-none"
    >
      <div className="bg-white border border-apple-border/90 shadow-[0_10px_35px_rgba(0,0,0,0.14)] rounded-2xl p-1.5 flex items-center justify-between gap-1 pb-[max(0.35rem,env(safe-area-inset-bottom,0px))]">
        {DOCK_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className={`relative flex-1 flex flex-col items-center justify-center py-1.5 px-0.5 rounded-xl transition-all duration-200 active:scale-90 min-h-[44px] ${
                active
                  ? "bg-blue-50/90 text-[#0071e3] border border-blue-200/60 shadow-[0_2px_8px_rgba(0,113,227,0.15)]"
                  : "text-slate-500 hover:text-apple-text active:bg-slate-100/70"
              }`}
            >
              <Icon
                className={`w-4 h-4 mb-0.5 transition-transform duration-200 ${
                  active
                    ? "scale-110 stroke-[2.25] text-[#0071e3] drop-shadow-[0_1px_3px_rgba(0,113,227,0.3)]"
                    : "stroke-[1.75] text-slate-500"
                }`}
              />
              <span
                className={`text-[10px] leading-none tracking-tight ${
                  active ? "font-semibold text-[#0071e3]" : "font-medium"
                }`}
              >
                {item.label}
              </span>

              {/* Luminous Micro-Indicator Dot */}
              {active && (
                <span className="w-1 h-1 rounded-full bg-[#0071e3] shadow-[0_0_6px_#0071e3] mt-0.5 animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

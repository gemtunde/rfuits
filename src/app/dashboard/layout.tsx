"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Activity,
  Compass,
  Settings,
  Mail,
  Globe,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const currentPath =
    pathname === "/dashboard" ? "dashboard" : pathname.split("/").pop();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHistorySidebarOpen, setIsHistorySidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* Mobile Menu Icon for Sidebar */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 bg-white rounded-lg shadow-md"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed md:relative w-60 bg-white shadow-md flex flex-col transform transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex items-center justify-center p-6">
          <Image src="/images/logo.png" alt="Logo" width={70} height={50} />
        </div>

        <nav className="flex-1 px-8 space-y-2">
          <NavItem
            icon={<Home className="h-5 w-5" />}
            label="Home"
            href="/dashboard"
            active={currentPath === "dashboard"}
          />
          <NavItem
            icon={<Activity className="h-5 w-5" />}
            label="Activity"
            href="/dashboard/activity"
            active={currentPath === "activity"}
          />
          <NavItem
            icon={<Compass className="h-5 w-5" />}
            label="Discover"
            href="/dashboard/discover"
            active={currentPath === "discover"}
          />
          <NavItem
            icon={<Settings className="h-5 w-5" />}
            label="Settings"
            href="/dashboard/settings"
            active={currentPath === "settings"}
          />
          <div className="my-8">
            <div
              className="rounded-lg p-4 text-white"
              style={{
                background: "linear-gradient(to right, #3579DC, #95D9FF)",
              }}
            >
              <p className="text-[14px] font-bold">GET more with PRO</p>
              <p className="text-sm font-normal mt-1">
                Upgrade to pro subscription for $9 / month
              </p>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4 md:p-6">
        {children}

        {/* Mobile Menu Icon for History Sidebar */}
        <div className="md:hidden fixed top-4 right-4 z-50">
          <button
            onClick={() => setIsHistorySidebarOpen(!isHistorySidebarOpen)}
            className="p-2 bg-white rounded-lg shadow-md"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* History Sidebar */}
      <div
        className={cn(
          "fixed md:relative w-64 bg-white shadow-md p-6 transform transition-transform duration-300 ease-in-out",
          isHistorySidebarOpen
            ? "translate-x-45"
            : "-translate-x-full md:translate-x-0"
        )}
      >
        <h2 className="text-xl font-semibold mb-6">History</h2>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-8">
            <HistoryItem
              icon={<Mail className="h-4 w-4 text-white" />}
              title="Email opened"
              date="July 2, 2021 8am"
            />

            <HistoryItem
              icon={<Mail className="h-4 w-4 text-white" />}
              title="Email sent"
              date="July 2, 2021 8am"
            />

            <HistoryItem
              icon={<Globe className="h-4 w-4 text-white" />}
              title="Visited website"
              date="July 2, 2021 8am"
            />

            <HistoryItem
              icon={<Mail className="h-4 w-4 text-white" />}
              title="Email sent"
              date="July 2, 2021 8am"
            />

            <HistoryItem
              icon={<Mail className="h-4 w-4 text-white" />}
              title="Email sent"
              date="July 2, 2021 8am"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  href,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center space-x-3 w-full p-3 rounded-md transition-colors",
        active ? "text-blue-500 bg-blue-50" : "text-gray-500 hover:bg-gray-100"
      )}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  );
}

function HistoryItem({
  icon,
  title,
  date,
}: {
  icon: React.ReactNode;
  title: string;
  date: string;
}) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 h-8 w-8 flex items-center justify-center z-10">
        <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h4 className="font-medium">{title}</h4>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  );
}

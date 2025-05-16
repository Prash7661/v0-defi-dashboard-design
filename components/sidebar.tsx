"use client"

import { Home, FileText, Award, BarChart3, Vote, BookOpen, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { WalletConnectButton } from "./wallet-connect"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Quests", href: "/quests", icon: FileText },
  { name: "Badges", href: "/badges", icon: Award },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Governance", href: "/governance", icon: Vote },
  { name: "Learn", href: "/learn", icon: BookOpen },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-slate-900/50 rounded-lg p-4 space-y-8 border border-slate-800/50 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col items-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/30">
        <div className="relative">
          <div className="h-16 w-16 rounded-full bg-defi-blue/20 flex items-center justify-center">
            <User className="h-8 w-8 text-defi-blue" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
            <span className="text-xs font-bold text-defi-blue">0</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-lg font-medium">Quest Explorer</h3>
          <p className="text-sm text-slate-400">Level 0 • Not Connected</p>
        </div>
        <div className="w-full mt-4">
          <div className="text-sm text-slate-400 flex justify-between mb-2">
            <span>XP Progress</span>
            <span>0/100</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
            <div className="bg-defi-blue h-2 rounded-full animate-pulse" style={{ width: "0%" }}></div>
          </div>
        </div>
        <WalletConnectButton className="w-full mt-4 gradient-bg text-white" />
      </div>

      <div>
        <h3 className="flex items-center gap-2 px-2 mb-4 text-sm font-medium text-slate-400">
          <LayoutGrid className="h-4 w-4" />
          Navigation
        </h3>
        <nav className="space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200",
                pathname === item.href
                  ? "bg-defi-blue/10 text-defi-blue"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-white",
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

function LayoutGrid({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}

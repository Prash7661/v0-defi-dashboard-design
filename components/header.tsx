import { Logo } from "./logo"
import Link from "next/link"
import { CircleDot } from "lucide-react"
import { WalletConnectButton } from "./wallet-connect"

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-defi-dark sticky top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/dashboard" className="text-white hover:text-defi-cyan transition-colors">
            Dashboard
          </Link>
          <Link href="/quests" className="text-white hover:text-defi-cyan transition-colors">
            Quests
          </Link>
          <Link href="/badges" className="text-white hover:text-defi-cyan transition-colors">
            Badges
          </Link>
          <Link href="/governance" className="text-white hover:text-defi-cyan transition-colors">
            Governance
          </Link>
          <Link href="/learn" className="text-white hover:text-defi-cyan transition-colors">
            Learn
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/30">
            <CircleDot className="h-4 w-4 text-green-500 animate-pulse" />
            <span className="text-sm text-slate-300">Solana Network</span>
          </div>
          <WalletConnectButton className="gradient-bg text-white" />
        </div>
      </div>
    </header>
  )
}

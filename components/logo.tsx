import { Layers } from "lucide-react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Layers className="h-8 w-8 text-defi-cyan" />
      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-defi-blue to-defi-cyan">
        DeFi Quest
      </span>
    </Link>
  )
}

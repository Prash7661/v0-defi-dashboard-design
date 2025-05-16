"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Wallet, ArrowRight, Check } from "lucide-react"

export function WalletConnectButton({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const [connecting, setConnecting] = useState<string | null>(null)
  const [connected, setConnected] = useState<string | null>(null)

  const handleConnect = (walletName: string) => {
    setConnecting(walletName)

    // Simulate connection process
    setTimeout(() => {
      setConnecting(null)
      setConnected(walletName)

      // Close dialog after successful connection
      setTimeout(() => {
        setOpen(false)
        setConnected(null)
      }, 1500)
    }, 2000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={`${className} hover:shadow-lg hover:shadow-defi-blue/20 transition-all`}>
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-slate-900 border-slate-800">
        <DialogHeader>
          <DialogTitle className="text-white">Connect your wallet</DialogTitle>
          <DialogDescription>Choose a wallet to connect to DeFi Quest</DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-4">
          <WalletOption
            name="Phantom"
            description="Connect to your Phantom wallet"
            onClick={() => handleConnect("Phantom")}
            isConnecting={connecting === "Phantom"}
            isConnected={connected === "Phantom"}
          />
          <WalletOption
            name="Solflare"
            description="Connect to your Solflare wallet"
            onClick={() => handleConnect("Solflare")}
            isConnecting={connecting === "Solflare"}
            isConnected={connected === "Solflare"}
          />
          <WalletOption
            name="Backpack"
            description="Connect to your Backpack wallet"
            onClick={() => handleConnect("Backpack")}
            isConnecting={connecting === "Backpack"}
            isConnected={connected === "Backpack"}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

function WalletOption({
  name,
  description,
  onClick,
  isConnecting,
  isConnected,
}: {
  name: string
  description: string
  onClick: () => void
  isConnecting: boolean
  isConnected: boolean
}) {
  return (
    <button
      className="flex items-center justify-between w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors disabled:opacity-70"
      onClick={onClick}
      disabled={isConnecting || isConnected}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
          <Wallet className="h-5 w-5 text-slate-300" />
        </div>
        <div className="text-left">
          <div className="font-medium text-white">{name}</div>
          <div className="text-sm text-slate-400">{description}</div>
        </div>
      </div>
      {isConnecting ? (
        <div className="h-5 w-5 rounded-full border-2 border-defi-blue border-t-transparent animate-spin" />
      ) : isConnected ? (
        <Check className="h-5 w-5 text-green-500" />
      ) : (
        <ArrowRight className="h-5 w-5 text-slate-400" />
      )}
    </button>
  )
}

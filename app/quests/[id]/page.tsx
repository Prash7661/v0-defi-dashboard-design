import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Circle, DollarSign } from "lucide-react"
import Link from "next/link"

export default function QuestPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <Sidebar />
          </aside>
          <main className="flex-1 space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/quests" className="text-slate-400 hover:text-white">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <h1 className="text-2xl font-bold text-white">Wallet Connection Quest</h1>
            </div>

            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-md bg-defi-blue/20">
                    <DollarSign className="h-6 w-6 text-defi-blue" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Wallet Connection</CardTitle>
                    <CardDescription>Connect your wallet to start your journey</CardDescription>
                  </div>
                  <span className="ml-auto text-xs font-medium px-2 py-1 rounded-md bg-defi-blue bg-opacity-20 text-defi-blue">
                    BEGINNER
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Quest Description</h3>
                  <p className="text-slate-400">
                    This quest will guide you through connecting your Solana wallet to DeFi Quest. Connecting your
                    wallet is the first step in your DeFi journey and will allow you to participate in quests, earn
                    badges, and vote on governance proposals.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Steps to Complete</h3>
                  <div className="space-y-3">
                    <QuestStep
                      number={1}
                      title="Install a Solana Wallet"
                      description="Download and install a Solana-compatible wallet like Phantom, Solflare, or Backpack."
                      status="completed"
                    />
                    <QuestStep
                      number={2}
                      title="Create a Wallet"
                      description="Create a new wallet or import an existing one. Make sure to securely store your seed phrase."
                      status="active"
                    />
                    <QuestStep
                      number={3}
                      title="Connect Your Wallet"
                      description="Click the 'Connect Wallet' button and select your wallet provider."
                      status="pending"
                    />
                    <QuestStep
                      number={4}
                      title="Approve Connection"
                      description="Approve the connection request in your wallet."
                      status="pending"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-slate-400">Reward:</p>
                      <p className="text-white font-medium">50 XP + Beginner Badge</p>
                    </div>
                    <Button className="gradient-bg text-white">Start Quest</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}

function QuestStep({
  number,
  title,
  description,
  status,
}: {
  number: number
  title: string
  description: string
  status: "completed" | "active" | "pending"
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        {status === "completed" ? (
          <CheckCircle className="h-6 w-6 text-green-500" />
        ) : status === "active" ? (
          <Circle className="h-6 w-6 text-defi-blue" />
        ) : (
          <Circle className="h-6 w-6 text-slate-600" />
        )}
      </div>
      <div>
        <h4 className="font-medium text-white">
          {number}. {title}
        </h4>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </div>
  )
}

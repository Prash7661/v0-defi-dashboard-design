import type React from "react"
import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, Flame, Gift } from "lucide-react"
import Link from "next/link"

export default function QuestsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <Sidebar />
          </aside>
          <main className="flex-1 space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Quests</h1>
              <p className="text-slate-400">
                Complete quests to earn XP, NFT badges, and governance power in the DeFi Quest ecosystem.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-slate-800 border border-slate-700 p-1">
                <TabsTrigger value="all" className="data-[state=active]:bg-defi-blue data-[state=active]:text-white">
                  All Quests
                </TabsTrigger>
                <TabsTrigger
                  value="beginner"
                  className="data-[state=active]:bg-defi-blue data-[state=active]:text-white"
                >
                  Beginner
                </TabsTrigger>
                <TabsTrigger
                  value="intermediate"
                  className="data-[state=active]:bg-defi-blue data-[state=active]:text-white"
                >
                  Intermediate
                </TabsTrigger>
                <TabsTrigger
                  value="partner"
                  className="data-[state=active]:bg-defi-blue data-[state=active]:text-white"
                >
                  Partner
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <QuestCard
                    id={1}
                    title="Wallet Connection"
                    description="Connect your wallet to start your journey"
                    icon={<DollarSign className="h-6 w-6 text-defi-blue" />}
                    reward="50 XP + Beginner Badge"
                    level="BEGINNER"
                    color="bg-defi-blue"
                    action="Start Quest"
                  />
                  <QuestCard
                    id={2}
                    title="Staking Basics"
                    description="Learn how to stake your first tokens"
                    icon={<Flame className="h-6 w-6 text-defi-purple" />}
                    reward="100 XP + Staker Badge"
                    level="BEGINNER"
                    color="bg-defi-purple"
                    action="Connect Wallet First"
                    disabled
                  />
                  <QuestCard
                    id={3}
                    title="Liquidity Provision"
                    description="Learn to provide liquidity to DeFi protocols"
                    icon={<DollarSign className="h-6 w-6 text-defi-green" />}
                    reward="200 XP + LP Provider Badge"
                    level="INTERMEDIATE"
                    color="bg-defi-green"
                    action="Connect Wallet First"
                    disabled
                  />
                  <QuestCard
                    id={4}
                    title="Jägermeister Special"
                    description="Complete the branded quest challenge"
                    icon={<Gift className="h-6 w-6 text-defi-orange" />}
                    reward="300 XP + Limited Edition Badge"
                    level="PARTNER"
                    color="bg-defi-orange"
                    action="Connect Wallet First"
                    disabled
                  />
                </div>
              </TabsContent>

              <TabsContent value="beginner" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <QuestCard
                    id={1}
                    title="Wallet Connection"
                    description="Connect your wallet to start your journey"
                    icon={<DollarSign className="h-6 w-6 text-defi-blue" />}
                    reward="50 XP + Beginner Badge"
                    level="BEGINNER"
                    color="bg-defi-blue"
                    action="Start Quest"
                  />
                  <QuestCard
                    id={2}
                    title="Staking Basics"
                    description="Learn how to stake your first tokens"
                    icon={<Flame className="h-6 w-6 text-defi-purple" />}
                    reward="100 XP + Staker Badge"
                    level="BEGINNER"
                    color="bg-defi-purple"
                    action="Connect Wallet First"
                    disabled
                  />
                </div>
              </TabsContent>

              <TabsContent value="intermediate" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <QuestCard
                    id={3}
                    title="Liquidity Provision"
                    description="Learn to provide liquidity to DeFi protocols"
                    icon={<DollarSign className="h-6 w-6 text-defi-green" />}
                    reward="200 XP + LP Provider Badge"
                    level="INTERMEDIATE"
                    color="bg-defi-green"
                    action="Connect Wallet First"
                    disabled
                  />
                </div>
              </TabsContent>

              <TabsContent value="partner" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <QuestCard
                    id={4}
                    title="Jägermeister Special"
                    description="Complete the branded quest challenge"
                    icon={<Gift className="h-6 w-6 text-defi-orange" />}
                    reward="300 XP + Limited Edition Badge"
                    level="PARTNER"
                    color="bg-defi-orange"
                    action="Connect Wallet First"
                    disabled
                  />
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

function QuestCard({
  id,
  title,
  description,
  icon,
  reward,
  level,
  color,
  action,
  disabled = false,
}: {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  reward: string
  level: string
  color: string
  action: string
  disabled?: boolean
}) {
  return (
    <Card className="bg-slate-900/50 border border-slate-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-defi-blue/10 transition-all duration-300 hover:scale-[1.02]">
      <CardContent className="p-0">
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-md bg-slate-800/50">{icon}</div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-white">{title}</h3>
                  <p className="text-sm text-slate-400">{description}</p>
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-md ${color} bg-opacity-20 text-${color.split("-")[1]}`}
                >
                  {level}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex justify-between items-center">
            <div>
              <p className="text-xs text-slate-400">Reward:</p>
              <p className="text-sm text-white">{reward}</p>
            </div>
            <Link href={disabled ? "#" : `/quests/${id}`}>
              <Button
                className={!disabled ? "gradient-bg text-white" : "bg-slate-800 text-slate-400"}
                disabled={disabled}
              >
                {action}
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

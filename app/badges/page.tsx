import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BadgesPage() {
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
              <h1 className="text-3xl font-bold text-white mb-2">NFT Badges</h1>
              <p className="text-slate-400">Collect unique NFT badges by completing quests and special challenges.</p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="bg-slate-800 border border-slate-700 p-1">
                <TabsTrigger value="all" className="data-[state=active]:bg-defi-blue data-[state=active]:text-white">
                  All Badges
                </TabsTrigger>
                <TabsTrigger
                  value="collected"
                  className="data-[state=active]:bg-defi-blue data-[state=active]:text-white"
                >
                  Your Collection
                </TabsTrigger>
                <TabsTrigger
                  value="special"
                  className="data-[state=active]:bg-defi-blue data-[state=active]:text-white"
                >
                  Special Editions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <BadgeCard
                    name="Beginner"
                    description="Complete the Wallet Connection quest"
                    color="border-defi-blue"
                    status="Locked"
                    rarity="Common"
                  />
                  <BadgeCard
                    name="Staker"
                    description="Complete the Staking Basics quest"
                    color="border-defi-purple"
                    status="Locked"
                    rarity="Common"
                  />
                  <BadgeCard
                    name="LP Provider"
                    description="Complete the Liquidity Provision quest"
                    color="border-defi-green"
                    status="Locked"
                    rarity="Uncommon"
                  />
                  <BadgeCard
                    name="Jägermeister"
                    description="Complete the Jägermeister Special quest"
                    color="border-defi-orange"
                    status="Locked"
                    rarity="Rare"
                  />
                  <BadgeCard
                    name="Trader"
                    description="Complete the Trading Fundamentals quest"
                    color="border-defi-blue"
                    status="Locked"
                    rarity="Common"
                  />
                  <BadgeCard
                    name="Yield Farmer"
                    description="Complete the Yield Farming quest"
                    color="border-defi-green"
                    status="Locked"
                    rarity="Uncommon"
                  />
                  <BadgeCard
                    name="Governance"
                    description="Vote on 3 governance proposals"
                    color="border-defi-purple"
                    status="Locked"
                    rarity="Uncommon"
                  />
                  <BadgeCard
                    name="Solana Pioneer"
                    description="Complete all beginner quests"
                    color="border-defi-orange"
                    status="Locked"
                    rarity="Rare"
                  />
                </div>
              </TabsContent>

              <TabsContent value="collected" className="mt-4">
                <Card className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <div className="w-20 h-20 rounded-full border-2 border-slate-700 flex items-center justify-center mx-auto mb-4 relative overflow-hidden">
                        <span className="text-3xl text-slate-600 animate-pulse">?</span>
                        <div className="absolute inset-0 bg-gradient-radial from-transparent to-slate-900/30 opacity-70"></div>
                      </div>
                      <p className="text-slate-400 max-w-md mx-auto">
                        Connect your wallet and complete quests to start earning NFT badges. Each badge is a unique NFT
                        that proves your DeFi knowledge and achievements.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="special" className="mt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <BadgeCard
                    name="Jägermeister"
                    description="Complete the Jägermeister Special quest"
                    color="border-defi-orange"
                    status="Locked"
                    rarity="Rare"
                  />
                  <BadgeCard
                    name="Solana Pioneer"
                    description="Complete all beginner quests"
                    color="border-defi-orange"
                    status="Locked"
                    rarity="Rare"
                  />
                  <BadgeCard
                    name="DeFi Master"
                    description="Complete all intermediate quests"
                    color="border-defi-orange"
                    status="Locked"
                    rarity="Epic"
                  />
                  <BadgeCard
                    name="Founding Member"
                    description="Limited edition for early adopters"
                    color="border-defi-orange"
                    status="Locked"
                    rarity="Legendary"
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

function BadgeCard({
  name,
  description,
  color,
  status,
  rarity,
}: {
  name: string
  description: string
  color: string
  status: string
  rarity: "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary"
}) {
  const rarityColors = {
    Common: "text-slate-400",
    Uncommon: "text-defi-green",
    Rare: "text-defi-blue",
    Epic: "text-defi-purple",
    Legendary: "text-defi-orange",
  }

  return (
    <Card className="bg-slate-900/50 border-slate-800 hover:shadow-lg hover:shadow-defi-blue/5 transition-all duration-300 hover:scale-[1.03]">
      <CardContent className="p-6 flex flex-col items-center">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center ${color} border-2 mb-4 relative overflow-hidden group`}
        >
          <span className="text-3xl group-hover:scale-110 transition-transform z-10">?</span>
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-slate-900/30 group-hover:opacity-0 transition-opacity"></div>
        </div>
        <h3 className="font-medium text-white text-lg">{name}</h3>
        <p className="text-sm text-slate-400 text-center mt-1">{description}</p>
        <div className="mt-4 pt-4 border-t border-slate-800 w-full flex justify-between items-center">
          <span className="text-sm text-slate-400">{status}</span>
          <span className={`text-xs font-medium ${rarityColors[rarity]}`}>{rarity}</span>
        </div>
      </CardContent>
    </Card>
  )
}

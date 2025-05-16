import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Clock, FileText } from "lucide-react"

export default function GovernancePage() {
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
              <h1 className="text-3xl font-bold text-white mb-2">Governance</h1>
              <p className="text-slate-400">
                Participate in the DeFi Quest DAO and help shape the future of the platform.
              </p>
            </div>

            <Card className="bg-slate-900/50 border-slate-800 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Your Governance Power</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                    <h3 className="text-sm font-medium text-slate-400">Governance Power</h3>
                    <div className="text-4xl font-bold mt-1 text-defi-green">0</div>
                    <div className="w-full bg-slate-700/50 h-1 mt-4 rounded-full overflow-hidden">
                      <div className="h-1 rounded-full bg-defi-green animate-pulse" style={{ width: "0%" }}></div>
                    </div>
                  </div>
                  <div className="flex-1 bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                    <h3 className="text-sm font-medium text-slate-400">Votes Cast</h3>
                    <div className="text-4xl font-bold mt-1 text-defi-blue">0</div>
                    <div className="w-full bg-slate-700/50 h-1 mt-4 rounded-full overflow-hidden">
                      <div className="h-1 rounded-full bg-defi-blue animate-pulse" style={{ width: "0%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="active" className="w-full">
              <TabsList className="bg-slate-800 border border-slate-700 p-1">
                <TabsTrigger value="active" className="data-[state=active]:bg-defi-blue data-[state=active]:text-white">
                  Active Proposals
                </TabsTrigger>
                <TabsTrigger value="past" className="data-[state=active]:bg-defi-blue data-[state=active]:text-white">
                  Past Proposals
                </TabsTrigger>
                <TabsTrigger value="drafts" className="data-[state=active]:bg-defi-blue data-[state=active]:text-white">
                  Draft Proposals
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-4">
                <Card className="bg-slate-900/50 border-slate-800 shadow-lg hover:shadow-defi-blue/5 transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-white">New Quest Theme Selection</h3>
                        <p className="text-slate-400">Vote for the next quest theme to be added to DeFi Quest</p>
                      </div>
                      <span className="text-xs bg-defi-blue/20 text-defi-blue px-3 py-1 rounded-full">Voting Open</span>
                    </div>

                    <div className="space-y-4 mt-4">
                      <VoteOption name="DeFi Lending" percentage={45} color="bg-defi-blue" />
                      <VoteOption name="NFT Trading" percentage={30} color="bg-defi-purple" />
                      <VoteOption name="DAO Participation" percentage={25} color="bg-defi-green" />
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <div className="flex items-center text-slate-400">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">Ends in 2 days</span>
                      </div>
                      <Button className="bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                        Connect Wallet to Vote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="past" className="mt-4">
                <div className="space-y-4">
                  <PastProposal
                    title="Platform Fee Adjustment"
                    description="Proposal to adjust the platform fee structure"
                    result="Passed"
                    votes={120}
                    date="Apr 15, 2025"
                  />
                  <PastProposal
                    title="New Partner Integration"
                    description="Proposal to add a new partner to DeFi Quest"
                    result="Rejected"
                    votes={85}
                    date="Mar 28, 2025"
                  />
                </div>
              </TabsContent>

              <TabsContent value="drafts" className="mt-4">
                <div className="text-center py-8 bg-slate-900/30 rounded-lg border border-slate-800/50 p-8">
                  <FileText className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">No Draft Proposals</h3>
                  <p className="text-slate-400 max-w-md mx-auto">
                    You need at least 100 governance power to create a draft proposal. Complete more quests to earn
                    governance power.
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center text-sm text-slate-400 pt-4">
              Complete quests to earn governance power and have your say in the future of DeFi Quest.
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function VoteOption({ name, percentage, color }: { name: string; percentage: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-white">{name}</span>
        <span className="text-white">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{
            width: `${percentage}%`,
            animation: `growWidth 1.5s ease-out`,
          }}
        ></div>
      </div>
    </div>
  )
}

function PastProposal({
  title,
  description,
  result,
  votes,
  date,
}: {
  title: string
  description: string
  result: "Passed" | "Rejected"
  votes: number
  date: string
}) {
  return (
    <Card className="bg-slate-900/50 border-slate-800 hover:shadow-lg hover:shadow-defi-blue/5 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-slate-400">{description}</p>
          </div>
          <span
            className={`text-xs px-3 py-1 rounded-full ${
              result === "Passed" ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
            }`}
          >
            {result}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-800">
          <div className="text-sm text-slate-400">
            <span>{votes} votes</span>
            <span className="mx-2">•</span>
            <span>Ended on {date}</span>
          </div>
          <Button
            variant="outline"
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          >
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
